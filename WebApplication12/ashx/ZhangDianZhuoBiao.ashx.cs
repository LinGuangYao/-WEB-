using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Data.OracleClient;
using System.Data;
using System.Web.Script.Serialization;


namespace WebApplication12.ashx
{
    /// <summary>
    /// ZhangDianZhuoBiao 的摘要说明
    /// </summary>
    public class ZhangDianZhuoBiao : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            DataSet ds;
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            OracleCommand cmd = new OracleCommand("select * from shigedian", conn);
            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "points");
            string a;
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