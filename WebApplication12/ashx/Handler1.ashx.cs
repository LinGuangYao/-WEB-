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
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string b = null;

            b = Convert.ToString(context.Request["bb"]);

            #region
            if (b != null)
            {
                string[] array = b.Split(';');

                string weizhi;
                weizhi = array[0];

                double lon, lat;
                lon = Convert.ToDouble(array[1]);
                lat = Convert.ToDouble(array[2]);

                string feel, weather, HUXI, YIWEI, WEISHANYUAN, WUSHANCHENGDU;
                feel = array[3];
                weather = array[4];
                HUXI = array[5];
                YIWEI = array[6];
                WEISHANYUAN = array[7];
                WUSHANCHENGDU = array[8];
                //经纬度转墨卡托
                lon = lon * 20037508.34 / 180;
                lat = Math.Log(Math.Tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
                lat = lat * 20037508.34 / 180;

                string dt = "2016/12/30";

                OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
                conn.Open();
                OracleCommand sss;

                sss = new OracleCommand("update android  set X =" + lon + " , Y=" + lat + " ,  WEIZHI  = ' " + weizhi + " ' ,  feel  = ' " + feel + " ',  weather  = ' " + weather + " ' ,  HUXI  = ' " + HUXI + " ' ,  YIWEI  = ' " + YIWEI + " '  ,  WEISHANYUAN  = ' " + WEISHANYUAN + " ' ,  WUSHANCHENGDU  = ' " + WUSHANCHENGDU + " '  where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);              
                sss.ExecuteNonQuery();

                context.Response.Write("上传成功");
            }
            #endregion


            else context.Response.Write("Null");


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