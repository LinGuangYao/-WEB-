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
    /// Login 的摘要说明
    /// </summary>
    public class Login : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string userNAME = Convert.ToString(context.Request["user"]);
            string passWORD = Convert.ToString(context.Request["pass"]);

            DataSet ds;
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            OracleCommand cmd;
            //  cmd = new OracleCommand("select PASSWORD from LOGIN where UERNAME= ' " + userNAME + "  '  ", conn);
            cmd = new OracleCommand("select PASSWORD from LOGIN where UERNAME='LGY'", conn);
            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "MIMA");
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