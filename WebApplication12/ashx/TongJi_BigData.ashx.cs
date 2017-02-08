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
    /// TongJi_BigData 的摘要说明
    /// </summary>
    public class TongJi_BigData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string Name = Convert.ToString(context.Request["name"]);
            string Zibiao = Convert.ToString(context.Request["zibiao"]);
            DataSet ds;
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();

            OracleCommand cmd = new OracleCommand("select " + Zibiao + " from " + Name + " order by riqi", conn);

            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "BIGDATATJ");
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