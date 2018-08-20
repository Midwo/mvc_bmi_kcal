using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using bmi_kcal.Models;

namespace bmi_kcal.Controllers
{
    public class ResultBMIsController : Controller
    {
        private DalContext db = new DalContext();

        // GET: ResultBMIs
        public ActionResult Index()
        {
            return View(db.resultBMIs.ToList());
        }

        // GET: ResultBMIs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBMI resultBMI = db.resultBMIs.Find(id);
            if (resultBMI == null)
            {
                return HttpNotFound();
            }
            return View(resultBMI);
        }

        // GET: ResultBMIs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ResultBMIs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ResultBMIID,ResultBMIValue,ResultBMIName,SaveDate,Weight,Growth")] ResultBMI resultBMI)
        {
            if (ModelState.IsValid)
            {
                db.resultBMIs.Add(resultBMI);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(resultBMI);
        }

        // GET: ResultBMIs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBMI resultBMI = db.resultBMIs.Find(id);
            if (resultBMI == null)
            {
                return HttpNotFound();
            }
            return View(resultBMI);
        }

        // POST: ResultBMIs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ResultBMIID,ResultBMIValue,ResultBMIName,SaveDate,Weight,Growth")] ResultBMI resultBMI)
        {
            if (ModelState.IsValid)
            {
                db.Entry(resultBMI).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(resultBMI);
        }

        // GET: ResultBMIs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBMI resultBMI = db.resultBMIs.Find(id);
            if (resultBMI == null)
            {
                return HttpNotFound();
            }
            return View(resultBMI);
        }

        // POST: ResultBMIs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ResultBMI resultBMI = db.resultBMIs.Find(id);
            db.resultBMIs.Remove(resultBMI);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
