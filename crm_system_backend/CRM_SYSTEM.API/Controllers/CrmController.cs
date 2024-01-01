using Microsoft.AspNetCore.Mvc;

namespace CRM_SYSTEM.API.Controllers
{
    [ApiController]
    [Route("api/crm")]
    public class CrmController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok();
        }
    }
}
