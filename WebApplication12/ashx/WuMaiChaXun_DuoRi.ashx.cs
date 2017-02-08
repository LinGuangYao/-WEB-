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
    /// WuMaiChaXun_DuoRi 的摘要说明
    /// </summary>
    public class WuMaiChaXun_DuoRi : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            DataSet ds;
            string dt_S = Convert.ToString(context.Request["sDAY"]);
            string dt_E = Convert.ToString(context.Request["eDAY"]);  
            string gkd = Convert.ToString(context.Request["GuoKongDian"]);
            string wrw = Convert.ToString(context.Request["GuoKongDian_WRW"]);
            if (wrw == "PM2.5")
            {
                wrw = "pm25";
            }
            if (gkd == "食品厂")
            {
                gkd = "shipinchang0";
            }
            if (gkd == "客车厂")
            {
                gkd = "kechechang0";
            }
            if (gkd == "净月潭")
            {
                gkd = "jingyuetan0";
            }
            if (gkd == "邮电学院")
            {
                gkd = "youdianxueyuan0";
            }
            if (gkd == "劳动公园")
            {
                gkd = "laodonggongyuan0";
            }
            if (gkd == "园林处")
            {
                gkd = "yuanlinchu0";
            }
            if (gkd == "甩湾子")
            {
                gkd = "shuaiwanzi0";
            }
            if (gkd == "经开环卫处")
            {
                gkd = "jingkaiquhuanweichu0";
            }
            if (gkd == "高新区管委会")
            {
                gkd = "gaoxinquguanweihui0";
            }
            if (gkd == "岱山公园")
            {
                gkd = "daishangongyuan0";
            }
            OracleDataAdapter sda;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456;");
            conn.Open();
            if (gkd == "ALL" && wrw == "ALL")
            {
                OracleCommand cmd = new OracleCommand("select dianming,aqi,no2,pm25,pm10,so2,o3,co from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi>=to_date(' " + dt_S + " ' ,'yyyy-mm-dd') and riqi<=to_date(' " + dt_E + " ' ,'yyyy-mm-dd') order by riqi", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "WMXX");
                string a = null;
                a = JsonConvert.SerializeObject(ds);
                context.Response.Write(a);
            }
            else if (gkd == "ALL" && wrw != "ALL")
            {
                OracleCommand cmd = new OracleCommand("select dianming, " + wrw + " from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi>=to_date(' " + dt_S + " ' ,'yyyy-mm-dd') and riqi<=to_date(' " + dt_E + " ' ,'yyyy-mm-dd') order by riqi", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "WMXX");
                string a = null;
                a = JsonConvert.SerializeObject(ds);
                context.Response.Write(a);
            }
            else if (gkd != "ALL" && wrw == "ALL")
            {
                OracleCommand cmd = new OracleCommand("select dianming,aqi,no2,pm25,pm10,so2,o3,co from  " + gkd + "  where riqi>=to_date(' " + dt_S + " ' ,'yyyy-mm-dd') and riqi<=to_date(' " + dt_E + " ' ,'yyyy-mm-dd') order by riqi", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "WMXX");
                string a = null;
                a = JsonConvert.SerializeObject(ds);
                context.Response.Write(a);

            }
            else if (gkd != "ALL" && wrw != "ALL")
            {
                OracleCommand cmd = new OracleCommand("select dianming, " + wrw + " from  " + gkd + "  where riqi>=to_date(' " + dt_S + " ' ,'yyyy-mm-dd') and riqi<=to_date(' " + dt_E + " ' ,'yyyy-mm-dd') order by riqi", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "WMXX");
                string a = null;
                a = JsonConvert.SerializeObject(ds);
                context.Response.Write(a);

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