using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace bmi_kcal.Controllers
{
    public class HomeController : Controller
    {
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
    }
}