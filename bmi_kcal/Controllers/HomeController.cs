using bmi_kcal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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

        public ActionResult Bmi()
        {
            return View();
        }

        public ActionResult Kcal()
        {
            return View();
        }

        public ActionResult Statistics()
        {
         
            return View();
        }
        public JsonResult DivisionOfActivity()
        {
            List<ToDivisionOfActivity> listcontext = new List<ToDivisionOfActivity>();
            var result2 = db.ResultBRMCPMs.GroupBy(c => c.SelectedActivity);
            var largestGroupsFirst = from g in result2
                                     orderby g.Count() descending
                                     select new { SelectedActivity = g.Key, Quantity = g.Count() };
            foreach (var result in largestGroupsFirst)
            {
                listcontext.Add(new ToDivisionOfActivity { Content = result.SelectedActivity, Quantity = result.Quantity});
            }
           
            return Json(listcontext, JsonRequestBehavior.AllowGet);
        }

        public class ToDivisionOfActivity
        {
            public string Content { get; set; }
            public int Quantity { get; set; }
        }

        public JsonResult DivisionOfGender()
        {
            List<ToDivisionOfActivity> listcontext = new List<ToDivisionOfActivity>();
            var result2 = db.ResultBRMCPMs.GroupBy(c => c.Gender);
            var largestGroupsFirst = from g in result2
                                     orderby g.Count() descending
                                     select new { Gender = g.Key, Quantity = g.Count() };
            foreach (var result in largestGroupsFirst)
            {
                listcontext.Add(new ToDivisionOfActivity { Content = result.Gender, Quantity = result.Quantity });
            }

            return Json(listcontext, JsonRequestBehavior.AllowGet);
        }

        public class ToDivisionOfGender
        {
            public string Content { get; set; }
            public int Quantity { get; set; }
        }
        public JsonResult DivisionOfDiet()
        {
            List<ToDivisionOfActivity> listcontext = new List<ToDivisionOfActivity>();
            var result2 = db.ResultBMIs.GroupBy(c => c.ResultBMIName);
            var largestGroupsFirst = from g in result2
                                     orderby g.Count() descending
                                     select new { ResultBMIName = g.Key, Quantity = g.Count() };
            foreach (var result in largestGroupsFirst)
            {
                listcontext.Add(new ToDivisionOfActivity { Content = result.ResultBMIName, Quantity = result.Quantity });
            }

            return Json(listcontext, JsonRequestBehavior.AllowGet);
        }

        public class ToDivisionOfDiet
        {
            public string Content { get; set; }
            public int Quantity { get; set; }
        }

        public ActionResult NewRecordBMI(ResultBMI std)
        {
            std.SaveDate = DateTime.Now;
            db.ResultBMIs.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });

        }

        public ActionResult NewRecordBrmCpm(ResultBRMCPM std)
        {
            std.SaveDate = DateTime.Now;
            db.ResultBRMCPMs.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }
    }
}