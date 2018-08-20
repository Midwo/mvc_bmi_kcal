using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace bmi_kcal.Models
{
    public class DalContext: DbContext
    {
        public DbSet<ResultBMI> resultBMIs { get; set; }
        public DbSet<ResultBRMCPM> resultBRMCPMs { get; set; }
    }
}