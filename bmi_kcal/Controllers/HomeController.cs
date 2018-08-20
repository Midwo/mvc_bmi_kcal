using bmi_kcal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace bmi_kcal.Controllers
{
    public class HomeController : Controller
    {
        private DalContext db = new DalContext();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult bmi()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult kcal()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult NewRecordBMI(ResultBMI std)
        {
            std.SaveDate = DateTime.Now;
            db.resultBMIs.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });

        }

        public ActionResult NewRecordBrmCpm(ResultBRMCPM std)
        {
            std.SaveDate = DateTime.Now;
            db.resultBRMCPMs.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }
    }
}