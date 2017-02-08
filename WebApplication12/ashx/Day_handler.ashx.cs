using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication12.ashx
{
    /// <summary>
    /// Day_handler 的摘要说明
    /// </summary>
    public class Day_handler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string stratTime = Convert.ToString(context.Request["stratdate"]);//接收前台传来的stratdate参数 
            string endTime = Convert.ToString(context.Request["enddate"]);//接收前台传来的enddate参数 
            int f_g = Convert.ToInt32(context.Request["flag"]);

            DateTime dayTime = DateTime.Parse(stratTime);
            DateTime day_end_Time = DateTime.Parse(endTime);

            if (f_g != 0)
            {

                dayTime = dayTime.AddDays(1);

            }

            string time_s = dayTime.ToString("yyyy-MM-dd");//
            string time_e = day_end_Time.ToString("yyyy-MM-dd");//
            context.Response.Write(time_s + "," + time_e);
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