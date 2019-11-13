using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SchoolWebApi.Models
{
    public class DBCtx : DbContext
    {
        public DBCtx(DbContextOptions<DbContext> options) : base(options) { }
        public DbSet<Register> RegisterUser { get; set; }
    }
    
}
