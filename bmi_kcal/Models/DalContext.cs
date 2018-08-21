using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace bmi_kcal.Models
{
    public class DalContext: DbContext
    {
        public DbSet<ResultBMI> ResultBMIs { get; set; }
        public DbSet<ResultBRMCPM> ResultBRMCPMs { get; set; }
    }
}