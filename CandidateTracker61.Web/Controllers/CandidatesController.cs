using CandidateTracker61.Data;
using CandidateTracker61.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CandidateTracker61.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;
        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("GetCandidates")]
        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            //RegistrationStatus enumStatus = (RegistrationStatus)Enum.Parse(typeof(RegistrationStatus), status, true);
            Repository repo = new(_connectionString);
            return repo.GetCandidates(status);
        }
        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            Repository repo = new(_connectionString);
            repo.AddCandidate(candidate);
        }
        [HttpGet]
        [Route("GetCandidate")]
        public Candidate GetCandidate(int id)
        {
            Repository repo = new(_connectionString);
            return repo.GetCandidate(id);
        }
        [HttpPost]
        [Route("UpdateStatus")]
        public void UpdateStatus(ViewModel vm)
        {
            vm.Candidate.RegistrationStatus = vm.Status;
            Repository repo = new(_connectionString);
            repo.UpdateCandidate(vm.Candidate);
        }
        [Route("GetCountForStatus")]
        public int GetCountForStatus(RegistrationStatus status)
        {
            Repository repo = new(_connectionString);
            return repo.GetCount(status);
        }
    }
}
