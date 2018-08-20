using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace bmi_kcal.Models
{
    public class ResultBRMCPM
    {
        [Key]
        public int ResultBRMCPMID { get; set; }

        [Required]
        public decimal ResultBRMValue { get; set; }

        [Required]
        public decimal ResultCPMValue { get; set; }

        [Required]
        public DateTime SaveDate { get; set; }

        [Required]
        public decimal Weight { get; set; }

        [Required]
        public decimal Growth { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string SelectedActivity { get; set; }


        [Required]
        public string Gender { get; set; }

    }
}