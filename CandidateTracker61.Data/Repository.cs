using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker61.Data
{
    public class Repository
    {
        private string _connectionString;
        public Repository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Candidate> GetCandidates(RegistrationStatus registrationStatus)
        {
            using var context = new CandidateTrackerDBContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == registrationStatus).ToList();
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerDBContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }
        public Candidate GetCandidate(int id)
        {
            using var context = new CandidateTrackerDBContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public void UpdateCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerDBContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
        public int GetCount(RegistrationStatus status)
        {
            using var context = new CandidateTrackerDBContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == status).ToList().Count;
        }
    }
}
