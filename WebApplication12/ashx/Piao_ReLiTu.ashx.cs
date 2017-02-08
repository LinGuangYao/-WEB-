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
    /// Piao_ReLiTu 的摘要说明
    /// </summary>
    public class Piao_ReLiTu : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string stratTime = Convert.ToString(context.Request["stratdate"]);//接收前台传来的stratdate参数 

            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();

            //   OracleCommand cmd = new OracleCommand("select AQI from shipinchang1 where riqi= to_date(' " + time + " ' , 'yyyy-mm-dd ')", conn);
            // OracleCommand cmd = new OracleCommand("select * from (select * from(select AQI from shipinchang1 where riqi=to_date(' " + stratTime + " ' , 'yyyy-mm-dd ')  union all  select AQI from kechechang1 where riqi=to_date(' " + stratTime + " ' , 'yyyy-mm-dd ') ))", conn);
            OracleCommand cmd = new OracleCommand("select aqi from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi=to_date(' " + stratTime + " ' ,'yyyy-mm-dd')", conn);
            DataSet ds;
            OracleDataAdapter sda;
            sda = new OracleDataAdapter();
            sda.SelectCommand = cmd;
            ds = new DataSet();
            sda.Fill(ds, "AQI");
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