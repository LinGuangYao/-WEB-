﻿using System;
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
    /// <summary>
    /// TongJi_BigData_douBian 的摘要说明
    /// </summary>
    public class TongJi_BigData_douBian : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string x_jh = Convert.ToString(context.Request["X"]);
            string y_jh = Convert.ToString(context.Request["Y"]);
            string z_b = Convert.ToString(context.Request["zibiao"]);

            string[] xx_jh = x_jh.Split(',');
            string[] yy_jh = y_jh.Split(',');

            double[] x_zb = new double[20];
            for (int i = 0; i < xx_jh.Length - 1; i++)
            {
                x_zb[i] = Convert.ToDouble(xx_jh[i]);
            }
            double[] y_zb = new double[20];
            for (int i = 0; i < yy_jh.Length - 1; i++)
            {
                y_zb[i] = Convert.ToDouble(yy_jh[i]);
            }

            DataSet ds, dsbp;
            OracleDataAdapter sda, bp;
            OracleConnection conn = new OracleConnection("data source=ORCL;user=LGY;password=123456");
            conn.Open();
            //清空此表
            OracleCommand detel = new OracleCommand("truncate table  WUMAIYUCELINGSHIBIAO", conn);
            detel.ExecuteNonQuery();

            for (int day = 0; day < 364; day++)
            {
                string dt_start = "2016-6-16";
                DateTime dt_d = Convert.ToDateTime(dt_start);
                dt_d = dt_d.AddDays(day);
                string dt = dt_d.ToShortDateString().ToString();

                OracleCommand cmd = new OracleCommand("select dianming,aqi,no2,pm25,pm10,so2,o3,co,X,Y from (select * from shipinchang0 union all select * from kechechang0  union all select * from youdianxueyuan0 union all select * from laodonggongyuan0  union all select * from yuanlinchu0 union all select * from jingyuetan0 union all select * from shuaiwanzi0 union all select * from jingkaiquhuanweichu0 union all select * from gaoxinquguanweihui0 union all select * from daishangongyuan0) where riqi=to_date(' " + dt + " ' ,'yyyy-mm-dd')", conn);
                sda = new OracleDataAdapter();
                sda.SelectCommand = cmd;
                ds = new DataSet();
                sda.Fill(ds, "WMXX");


                double aqi_DouBian = 0;
                double no2_DouBian = 0;
                double pm25_DouBian = 0;
                double pm10_DouBian = 0;
                double so2_DouBian = 0;
                double o3_DouBian = 0;
                double co_DouBian = 0;
                for (int j = 0; j < xx_jh.Length - 1; j++)
                {
                    //计算距离权重
                    double[] jili = new double[10];
                    double jili_sum = 0;
                    for (int i = 0; i < 10; i++)
                    {
                        double xx = Convert.ToDouble(ds.Tables[0].Rows[i][8].ToString());//x坐标
                        double yy = Convert.ToDouble(ds.Tables[0].Rows[i][9].ToString());//y
                        jili[i] = Math.Sqrt(Math.Pow((xx - x_zb[i]), 2) + Math.Pow((yy - y_zb[i]), 2));
                        jili_sum += jili[i];
                    }

                    double AQI_DanDian = 0;
                    double no2_DanDian = 0;
                    double pm25_DanDian = 0;
                    double pm10_DanDian = 0;
                    double so2_DanDian = 0;
                    double o3_DanDian = 0;
                    double co_DanDian = 0;
                    //按距离计算各参数
                    for (int i = 0; i < 10; i++)
                    {
                        double aqi = Convert.ToDouble(ds.Tables[0].Rows[i][1].ToString());
                        AQI_DanDian += aqi * jili[i] / jili_sum;
                        double no2 = Convert.ToDouble(ds.Tables[0].Rows[i][2].ToString());
                        no2_DanDian += no2 * jili[i] / jili_sum;
                        double pm25 = Convert.ToDouble(ds.Tables[0].Rows[i][3].ToString());
                        pm25_DanDian += pm25 * jili[i] / jili_sum;
                        double pm10 = Convert.ToDouble(ds.Tables[0].Rows[i][4].ToString());
                        pm10_DanDian += pm10 * jili[i] / jili_sum;
                        double so2 = Convert.ToDouble(ds.Tables[0].Rows[i][5].ToString());
                        so2_DanDian += so2 * jili[i] / jili_sum;
                        double o3 = Convert.ToDouble(ds.Tables[0].Rows[i][6].ToString());
                        o3_DanDian += o3 * jili[i] / jili_sum;
                        double co = Convert.ToDouble(ds.Tables[0].Rows[i][7].ToString());
                        co_DanDian += co * jili[i] / jili_sum;
                    }
                    aqi_DouBian += AQI_DanDian;
                    no2_DouBian += no2_DanDian;
                    pm25_DouBian += pm25_DanDian;
                    pm10_DouBian += pm10_DanDian;
                    so2_DouBian += so2_DanDian;
                    o3_DouBian += o3_DanDian;
                    co_DouBian += co_DanDian;
                }
                aqi_DouBian += aqi_DouBian / (xx_jh.Length - 1);
                no2_DouBian = no2_DouBian / (xx_jh.Length - 1);
                pm25_DouBian = pm25_DouBian / (xx_jh.Length - 1);
                pm10_DouBian = pm10_DouBian / (xx_jh.Length - 1);
                so2_DouBian = so2_DouBian / (xx_jh.Length - 1);
                o3_DouBian = o3_DouBian / (xx_jh.Length - 1);
                co_DouBian = co_DouBian / (xx_jh.Length - 1);

                OracleCommand sss;
                sss = new OracleCommand("insert into WUMAIYUCELINGSHIBIAO (AQI,NO2,PM25,PM10,SO2,O3,CO,RIQI) values('" + aqi_DouBian + "','" + no2_DouBian + "','" + pm25_DouBian + "','" + pm10_DouBian + "','" + so2_DouBian + "','" + o3_DouBian + "','" + co_DouBian + " ',to_date(' " + dt + " ' ,'yyyy-mm-dd'))", conn);
                sss.ExecuteNonQuery();
            }

            OracleCommand selet_cmd = new OracleCommand("select " + z_b + " from WUMAIYUCELINGSHIBIAO order by riqi", conn);
            bp = new OracleDataAdapter();
            bp.SelectCommand = selet_cmd;
            dsbp = new DataSet();
            bp.Fill(dsbp, "BIGDATATJPOINT");
            string dd = null;
            dd = JsonConvert.SerializeObject(dsbp);
            context.Response.Write(dd);

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