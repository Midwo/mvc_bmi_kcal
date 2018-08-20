using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace bmi_kcal.Models
{
    public class ResultBMI
    {
        [Key]
        public int ResultBMIID { get; set; }

        [Required]
        public decimal ResultBMIValue { get; set; }

        [Required]
        public string ResultBMIName { get; set; }

        [Required]
        public DateTime SaveDate { get; set; }

        [Required]
        public decimal Weight { get; set; }

        [Required]
        public decimal Growth { get; set; }
    }
}