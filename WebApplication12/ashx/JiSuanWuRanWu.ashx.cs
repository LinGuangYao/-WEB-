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
    /// JiSuanWuRanWu 的摘要说明
    /// </summary>
    public class JiSuanWuRanWu : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {

            context.Response.ContentType = "text/plain";

            double PM25 = Convert.ToDouble(context.Request["pm25"]);
            double PM10 = Convert.ToDouble(context.Request["pm10"]);
            double SO2 = Convert.ToDouble(context.Request["so2"]);
            double CO = Convert.ToDouble(context.Request["co"]);
            double O3 = Convert.ToDouble(context.Request["o3"]);
            double NO2 = Convert.ToDouble(context.Request["no2"]);
            double x_ZB = Convert.ToDouble(context.Request["X_zhuoBiao"]);
            double y_ZB = Convert.ToDouble(context.Request["Y_zhuoBiao"]);
            string WeiZhi_jeidao = Convert.ToString(context.Request["Jeidao"]);
            string imgSrc = Convert.ToString(context.Request["imgsrc"]);
            string name_img = Convert.ToString(context.Request["name"]);

            double Flag = Convert.ToDouble(context.Request["flag"]);

            double AQI_PM25 = 0;
            double AQI_PM10 = 0;
            double AQI_SO2 = 0;
            double AQI_CO = 0;
            double AQI_O3 = 0;
            double AQI_NO2 = 0;

            #region
            if (PM25 >= 0 && PM25 <= 35)
            {
                AQI_PM25 = 50 / 35.0 * (PM25 - 0) + 0;
            }
            if (PM25 > 35 && PM25 <= 75)
            {
                AQI_PM25 = 50.0 / (75 - 35) * (PM25 - 35) + 50;
            }
            if (PM25 > 75 && PM25 <= 115)
            {
                AQI_PM25 = 50.0 / (115 - 75) * (PM25 - 75) + 100;
            }
            if (PM25 > 115 && PM25 <= 150)
            {
                AQI_PM25 = 50.0 / (150 - 115) * (PM25 - 115) + 150;
            }
            if (PM25 > 150 && PM25 <= 250)
            {
                AQI_PM25 = 100.0 / (250 - 150) * (PM25 - 150) + 200;
            }
            if (PM25 > 250 && PM25 <= 350)
            {
                AQI_PM25 = 100.0 / (350 - 250) * (PM25 - 250) + 300;
            }
            if (PM25 > 350 && PM25 <= 500)
            {
                AQI_PM25 = 100.0 / (500 - 350) * (PM25 - 350) + 400;
            }


            if (PM10 >= 0 && PM10 <= 50)
            {
                AQI_PM10 = 50 / 50.0 * (PM10 - 0) + 0;
            }
            if (PM10 > 50 && PM10 <= 150)
            {
                AQI_PM10 = 50.0 / (150 - 50) * (PM10 - 50) + 50;
            }
            if (PM10 > 150 && PM10 <= 250)
            {
                AQI_PM10 = 50.0 / (250 - 150) * (PM10 - 150) + 100;
            }
            if (PM10 > 250 && PM10 <= 350)
            {
                AQI_PM10 = 50.0 / (350 - 250) * (PM10 - 250) + 150;
            }
            if (PM10 > 350 && PM10 <= 420)
            {
                AQI_PM10 = 100.0 / (420 - 350) * (PM10 - 350) + 200;
            }
            if (PM10 > 420 && PM10 <= 500)
            {
                AQI_PM10 = 100.0 / (500 - 420) * (PM10 - 420) + 300;
            }
            if (PM10 > 500 && PM10 <= 600)
            {
                AQI_PM10 = 100.0 / (600 - 500) * (PM10 - 500) + 400;
            }



            if (SO2 >= 0 && SO2 <= 50)
            {
                AQI_SO2 = 50 / 50.0 * (SO2 - 0) + 0;
            }
            if (SO2 > 50 && SO2 <= 150)
            {
                AQI_SO2 = 50.0 / (150 - 50) * (SO2 - 50) + 50;
            }
            if (SO2 > 150 && SO2 <= 475)
            {
                AQI_SO2 = 50.0 / (475 - 150) * (SO2 - 150) + 100;
            }
            if (SO2 > 475 && SO2 <= 800)
            {
                AQI_SO2 = 50.0 / (800 - 475) * (SO2 - 475) + 150;
            }
            if (SO2 > 800 && SO2 <= 1600)
            {
                AQI_SO2 = 100.0 / (1600 - 800) * (SO2 - 800) + 200;
            }
            if (SO2 > 1600 && SO2 <= 2100)
            {
                AQI_SO2 = 100.0 / (2100 - 1600) * (SO2 - 1600) + 300;
            }
            if (SO2 > 2100 && SO2 <= 2620)
            {
                AQI_SO2 = 100.0 / (2620 - 2100) * (SO2 - 2100) + 400;
            }


            if (CO >= 0 && CO <= 5)
            {
                AQI_CO = 50 / 5.0 * (CO - 0) + 0;
            }
            if (CO > 5 && CO <= 10)
            {
                AQI_CO = 50.0 / (10 - 5) * (CO - 5) + 50;
            }
            if (CO > 10 && CO <= 35)
            {
                AQI_CO = 50.0 / (35 - 10) * (CO - 10) + 100;
            }
            if (CO > 35 && CO <= 60)
            {
                AQI_CO = 50.0 / (60 - 35) * (CO - 35) + 150;
            }
            if (CO > 60 && CO <= 90)
            {
                AQI_CO = 100.0 / (60 - 35) * (CO - 60) + 200;
            }
            if (CO > 90 && CO <= 120)
            {
                AQI_CO = 100.0 / (120 - 90) * (CO - 90) + 300;
            }
            if (CO > 120 && CO <= 150)
            {
                AQI_CO = 100.0 / (150 - 120) * (CO - 120) + 400;
            }


            if (O3 >= 0 && O3 <= 160)
            {
                AQI_O3 = 50.0 / 160.0 * (O3 - 0) + 0;
            }
            if (O3 > 160 && O3 <= 200)
            {
                AQI_O3 = 50.0 / (200 - 160) * (O3 - 160) + 50;
            }
            if (O3 > 200 && O3 <= 300)
            {
                AQI_O3 = 50.0 / (300 - 200) * (O3 - 200) + 100;
            }
            if (O3 > 300 && O3 <= 400)
            {
                AQI_O3 = 50.0 / (400 - 300) * (O3 - 300) + 150;
            }
            if (O3 > 400 && O3 <= 800)
            {
                AQI_O3 = 100.0 / (800 - 400) * (O3 - 400) + 200;
            }
            if (O3 > 800 && O3 <= 1000)
            {
                AQI_O3 = 100.0 / (1000 - 800) * (O3 - 800) + 300;
            }
            if (O3 > 1000 && O3 <= 1200)
            {
                AQI_O3 = 100.0 / (1200 - 1000) * (O3 - 1000) + 400;
            }


            if (NO2 >= 0 && NO2 <= 100)
            {
                AQI_NO2 = 50.0 / 100.0 * (NO2 - 0) + 0;
            }
            if (NO2 > 100 && NO2 <= 200)
            {
                AQI_NO2 = 50.0 / (200 - 100) * (NO2 - 100) + 50;
            }
            if (NO2 > 200 && NO2 <= 700)
            {
                AQI_NO2 = 50.0 / (700 - 200) * (NO2 - 200) + 100;
            }
            if (NO2 > 700 && NO2 <= 1200)
            {
                AQI_NO2 = 50.0 / (1200 - 700) * (NO2 - 700) + 150;
            }
            if (NO2 > 1200 && NO2 <= 2340)
            {
                AQI_NO2 = 100.0 / (2340 - 1200) * (NO2 - 1200) + 200;
            }
            if (NO2 > 2340 && NO2 <= 3090)
            {
                AQI_NO2 = 100.0 / (3090 - 2340) * (NO2 - 2340) + 300;
            }
            if (NO2 > 3090 && NO2 <= 3840)
            {
                AQI_NO2 = 100.0 / (3840 - 3090) * (NO2 - 3090) + 400;
            }


            double[] AQIs = new double[] { AQI_PM25, AQI_PM10, AQI_O3, AQI_NO2, AQI_CO, AQI_CO };
            double AQI_MAX = AQIs.Max(); //最终的AQI

            string air_q = null;

            if (AQI_MAX >= 0 && AQI_MAX <= 50)
            {
                air_q = "优";
            }
            if (AQI_MAX > 50 && AQI_MAX <= 100)
            {
                air_q = "良";
            }
            if (AQI_MAX > 100 && AQI_MAX <= 150)
            {
                air_q = "轻度污染";
            }
            if (AQI_MAX > 150 && AQI_MAX <= 200)
            {
                air_q = "中度污染";
            }
            if (AQI_MAX > 200 && AQI_MAX <= 300)
            {
                air_q = "重度污染";
            }
            if (AQI_MAX > 300)
            {
                air_q = "严重污染";
            }
            #endregion
            string max = Convert.ToString(AQI_MAX);
            string s_y_w_s = null;//首要污染物
            string c_b_w_s = null;//首要污染物
            #region
            if (AQI_PM25 > 50)
            {
                s_y_w_s += "PM2.5 ";
                if (AQI_PM25 > 100)
                {
                    c_b_w_s += "PM2.5 ";
                }
            }
            if (AQI_PM10 > 50)
            {
                s_y_w_s += "PM10 ";
                if (AQI_PM10 > 100)
                {
                    c_b_w_s += "PM10 ";
                }
            }
            if (AQI_O3 > 50)
            {
                s_y_w_s += "O3 ";
                if (AQI_O3 > 100)
                {
                    c_b_w_s += "O3 ";
                }

            }
            if (AQI_CO > 50)
            {
                s_y_w_s += "CO ";
                if (AQI_CO > 100)
                {
                    c_b_w_s += "CO ";
                }
            }
            if (AQI_NO2 > 50)
            {
                s_y_w_s += "NO2 ";
                if (AQI_NO2 > 100)
                {
                    c_b_w_s += "NO2 ";
                }
            }
            if (AQI_SO2 > 50)
            {
                s_y_w_s += "SO2 ";
                if (AQI_SO2 > 100)
                {
                    c_b_w_s += "SO2 ";
                }
            }
            //context.Response.Write(max + "," + s_y_w_s + "," + c_b_w_s+ "," +air_q);
            #endregion

            if (Flag == 1)
            {
                ////保存到数据库中
                OracleDataAdapter sda;
                OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
                conn.Open();
                OracleCommand sss;
                sss = new OracleCommand("insert into SHOUDONGZHANDIAN (WEIZI,AQI,NO2,PM25,PM10,SO2,O3,CO,RIQI,X,Y,SHOYAOWUSHAN,CHAOBIAO,AIR_QUALITY,TUPIAN,NAMETP) values('" + WeiZhi_jeidao + "','" + AQI_MAX + "','" + NO2 + "','" + PM25 + "','" + PM10 + "','" + SO2 + "','" + O3 + "','" + CO + "','" + null + "','" + x_ZB + "','" + y_ZB + "','" + s_y_w_s + "','" + c_b_w_s + "','" + air_q + "',rawtohex( '" + imgSrc + "'),'" + name_img + "')", conn);
                sss.ExecuteNonQuery();

            }
        

            context.Response.Write(max + "," + s_y_w_s + "," + c_b_w_s + "," + air_q);
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