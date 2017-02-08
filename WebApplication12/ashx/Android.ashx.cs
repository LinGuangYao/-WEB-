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
    /// <summary>1
    /// Android 的摘要说明
    /// </summary>
    public class Android : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string dt = Convert.ToString(context.Request["DAY"]);
            string flag = Convert.ToString(context.Request["flag"]);
           // string str = System.Configuration.ConfigurationManager.ConnectionStrings["ORACLEConnectionString"].ConnectionString;
          
            if (flag == "1")
            {
                DataSet ds;
                OracleDataAdapter sda;
              OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
                 // OracleConnection conn = new OracleConnection(str);
                conn.Open();
                OracleCommand cmd = new OracleCommand("select WEIZHI,WEATHER,HUXI,YIWEI,WEISHANYUAN ,WUSHANCHENGDU,FEEL,x,y from android where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "ANDROIDWZ");
                string a = null;
                a = JsonConvert.SerializeObject(ds);
                context.Response.Write(a);
            }
            if (flag == "2")
            {
                DataSet ds1;
                OracleDataAdapter sda1;
                OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
                //OracleConnection conn = new OracleConnection(str);
                conn.Open();
                OracleCommand cmd1 = new OracleCommand("select WEIZHI,WEATHER,HUXI,YIWEI,WEISHANYUAN ,WUSHANCHENGDU,FEEL,x,y from android where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
                sda1 = new OracleDataAdapter();
                sda1.SelectCommand = cmd1;
                ds1 = new DataSet();
                sda1.Fill(ds1, "ANDROIDxy");
                string a1 = null;
                a1 = JsonConvert.SerializeObject(ds1);
                context.Response.Write(a1);
            }

            //if (flag == "1")
            //{
            //    DataSet ds;
            //    OracleDataAdapter sda;
            //    OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            //    conn.Open();
            //    OracleCommand cmd = new OracleCommand("select WEIZHI,WEATHER,HUXI,YIWEI,WEISHANYUAN ,WUSHANCHENGDU,FEEL,x,y from android where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
            //    sda = new OracleDataAdapter();
            //    sda.SelectCommand = cmd;
            //    ds = new DataSet();
            //    sda.Fill(ds, "ANDROIDWZ");
            //    string a = null;
            //    a = JsonConvert.SerializeObject(ds);
            //    context.Response.Write(a);
            //}
            //if (flag == "2")
            //{
            //    DataSet ds1;
            //    OracleDataAdapter sda1;
            //    OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            //    conn.Open();
            //    OracleCommand cmd1 = new OracleCommand("select WEIZHI,WEATHER,HUXI,YIWEI,WEISHANYUAN ,WUSHANCHENGDU,FEEL,x,y from android where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
            //    sda1 = new OracleDataAdapter();
            //    sda1.SelectCommand = cmd1;
            //    ds1 = new DataSet();
            //    sda1.Fill(ds1, "ANDROIDxy");
            //    string a1 = null;
            //    a1 = JsonConvert.SerializeObject(ds1);
            //    context.Response.Write(a1);
            //}


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