using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Data.OracleClient;
using System.Data;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.IO;

namespace WebApplication12.ashx
{
    /// <summary>
    /// andriod_readPic 的摘要说明
    /// </summary>
    public class andriod_readPic : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string dt = Convert.ToString(context.Request["DAY"]);

            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            OracleCommand sss;
            //  sss = new OracleCommand("select  PICTURES from  android   where riqi=to_date(' " + dt + " ' , 'yyyy-mm-dd ')", conn);
            sss = new OracleCommand("select  PICTURES from  android  where riqi=to_date('2016/9/28' ,'yyyy-mm-dd')", conn);

            using (OracleDataReader reader = sss.ExecuteReader())
            {
                while (reader.Read())
                {
                    MemoryStream buf = new MemoryStream((byte[])reader[0]);
                    System.Drawing.Image GetPic = System.Drawing.Image.FromStream(buf);
                    GetPic.Save("D:\\1_1.jpeg", System.Drawing.Imaging.ImageFormat.Png);
                    buf.WriteTo(context.Response.OutputStream);
                    buf.Close();
                    //  GetPic.Save("D:\\111.jpeg", System.Drawing.Imaging.ImageFormat.Png);
                    //  context.Response.ContentType = "image/Jpeg";

                }
            }




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