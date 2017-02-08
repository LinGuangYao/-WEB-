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
    /// Handler2 的摘要说明
    /// </summary>
    public class Handler2 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Charset = "utf-8";

            HttpPostedFile file = context.Request.Files["Filedata"];

            if (context.Request["type"] == "android")
            {
                if (file != null)
                {
                    string sFileName = "E:\\2.png";
                    file.SaveAs(sFileName);
                    FileStream fs = File.OpenRead(sFileName);

                    byte[] imagebyte = new byte[fs.Length];
                    fs.Read(imagebyte, 0, (int)fs.Length);

                    fs.Close();
                    fs.Dispose();

                    string dt = "2016/12/30";
                    OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
                    conn.Open();
                    OracleCommand sss;
                    //  sss = new OracleCommand("update  android  set bb =" + b + ",pp=" +p+ "  where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
                    sss = new OracleCommand(@"update  android  set PICTURES =:image  where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
                    sss.Parameters.Add(new OracleParameter("image", OracleType.Blob));
                    sss.Parameters["image"].Value = imagebyte;
                    sss.ExecuteNonQuery();

                }

            }
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