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
    public class ResultBRMCPIsController : Controller
    {
        private DalContext db = new DalContext();

        // GET: ResultBRMCPIs
        public ActionResult Index()
        {
            return View(db.resultBRMCPIs.ToList());
        }

        // GET: ResultBRMCPIs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBRMCPI resultBRMCPI = db.resultBRMCPIs.Find(id);
            if (resultBRMCPI == null)
            {
                return HttpNotFound();
            }
            return View(resultBRMCPI);
        }

        // GET: ResultBRMCPIs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ResultBRMCPIs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ResultBRMCPIID,ResultBRMValue,ResultCPIValue,SaveDate,Weight,Growth,Age,SelectedActivity")] ResultBRMCPI resultBRMCPI)
        {
            if (ModelState.IsValid)
            {
                db.resultBRMCPIs.Add(resultBRMCPI);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(resultBRMCPI);
        }

        // GET: ResultBRMCPIs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBRMCPI resultBRMCPI = db.resultBRMCPIs.Find(id);
            if (resultBRMCPI == null)
            {
                return HttpNotFound();
            }
            return View(resultBRMCPI);
        }

        // POST: ResultBRMCPIs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ResultBRMCPIID,ResultBRMValue,ResultCPIValue,SaveDate,Weight,Growth,Age,SelectedActivity")] ResultBRMCPI resultBRMCPI)
        {
            if (ModelState.IsValid)
            {
                db.Entry(resultBRMCPI).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(resultBRMCPI);
        }

        // GET: ResultBRMCPIs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ResultBRMCPI resultBRMCPI = db.resultBRMCPIs.Find(id);
            if (resultBRMCPI == null)
            {
                return HttpNotFound();
            }
            return View(resultBRMCPI);
        }

        // POST: ResultBRMCPIs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ResultBRMCPI resultBRMCPI = db.resultBRMCPIs.Find(id);
            db.resultBRMCPIs.Remove(resultBRMCPI);
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
