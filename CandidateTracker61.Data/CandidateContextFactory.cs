using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker61.Data
{
    public class CandidateContextFactory : IDesignTimeDbContextFactory<CandidateTrackerDBContext>
    {
        public CandidateTrackerDBContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
               .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}CandidateTracker61.Web"))
               .AddJsonFile("appsettings.json")
               .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateTrackerDBContext(config.GetConnectionString("ConStr"));
        }
    }

}
