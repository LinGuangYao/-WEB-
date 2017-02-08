using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Data.OracleClient;
using System.Data;
using System.Web.Script.Serialization;
using System.Web.Services;


namespace WebApplication12.ashx
{
    /// <summary>
    /// Tomorrow_nongdu 的摘要说明
    /// </summary>
    public class Tomorrow_nongdu : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string dt = Convert.ToString(context.Request["DAY"]);
            DateTime dayTime = DateTime.Parse(dt);
            DateTime endtime;
            endtime = dayTime.AddDays(-7);
            string time_s = dayTime.ToString("yyyy-MM-dd");
            string time_e = endtime.ToString("yyyy-MM-dd");

            DataSet ds;
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            OracleCommand cmd = new OracleCommand("select dianming,aqi,no2,pm25,pm10,so2,o3,co from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi>to_date(' " + time_e + " ' ,'yyyy-mm-dd')  and  riqi<=to_date(' " + time_s + " ' ,'yyyy-mm-dd')", conn);
            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "NDWC");
            string a = null;
            a = JsonConvert.SerializeObject(ds);
            context.Response.Write(a);
            
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