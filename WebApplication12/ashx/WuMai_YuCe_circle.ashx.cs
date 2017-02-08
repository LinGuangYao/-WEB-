using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Data.OracleClient;
using System.Data;
using System.Web.Script.Serialization;
using System.Web.UI;

namespace WebApplication12.ashx
{
    /// <summary>
    /// WuMai_YuCe_circle 的摘要说明
    /// </summary>
    public class WuMai_YuCe_circle : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string YX = Convert.ToString(context.Request["X"]);
            string dt = Convert.ToString(context.Request["dateTime"]);

            string[] x_y = YX.Split(',');
            double x = Convert.ToDouble(x_y[0]);
            double y = Convert.ToDouble(x_y[1]);

            DataSet ds;
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            OracleCommand cmd = new OracleCommand("select dianming,aqi,no2,pm25,pm10,so2,o3,co,X,Y from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "WMXX");


            //计算距离权重
            double[] jili = new double[10];
            double jili_sum = 0;
            for (int i = 0; i < 10; i++)
            {
                double xx = Convert.ToDouble(ds.Tables[0].Rows[i][8].ToString());//x坐标
                double yy = Convert.ToDouble(ds.Tables[0].Rows[i][9].ToString());//y
                jili[i] = Math.Sqrt(Math.Pow((xx - x), 2) + Math.Pow((yy - y), 2));
                jili_sum += jili[i];
            }

            double AQI_DanDian = 0;
            double no2_DanDian = 0;
            double pm25_DanDian = 0;
            double pm10_DanDian = 0;
            double so2_DanDian = 0;
            double o3_DanDian = 0;
            double co_DanDian = 0;
            //按距离计算各参数
            for (int i = 0; i < 10; i++)
            {
                double aqi = Convert.ToDouble(ds.Tables[0].Rows[i][1].ToString());
                AQI_DanDian += aqi * jili[i] / jili_sum;
                double no2 = Convert.ToDouble(ds.Tables[0].Rows[i][2].ToString());
                no2_DanDian += no2 * jili[i] / jili_sum;
                double pm25 = Convert.ToDouble(ds.Tables[0].Rows[i][3].ToString());
                pm25_DanDian += pm25 * jili[i] / jili_sum;
                double pm10 = Convert.ToDouble(ds.Tables[0].Rows[i][4].ToString());
                pm10_DanDian += pm10 * jili[i] / jili_sum;
                double so2 = Convert.ToDouble(ds.Tables[0].Rows[i][5].ToString());
                so2_DanDian += so2 * jili[i] / jili_sum;
                double o3 = Convert.ToDouble(ds.Tables[0].Rows[i][6].ToString());
                o3_DanDian += o3 * jili[i] / jili_sum;
                double co = Convert.ToDouble(ds.Tables[0].Rows[i][7].ToString());
                co_DanDian += co * jili[i] / jili_sum;
            }

            context.Response.Write(AQI_DanDian + "," + no2_DanDian + "," + pm25_DanDian + "," + pm10_DanDian + "," + so2_DanDian + "," + o3_DanDian + "," + co_DanDian);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}