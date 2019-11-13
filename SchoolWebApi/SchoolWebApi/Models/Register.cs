using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolWebApi.Models
{
    public class Register
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string Describe { get; set; }
        public string Achivement { get; set; }
        public string Degree { get; set; }
        public string Experience { get; set; }
        public DateTime DOB { get; set; }
    }
}
