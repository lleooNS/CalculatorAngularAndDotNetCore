using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DivisionController : ControllerBase
    {
        [HttpGet("{num1}/{num2}")]
        public double Division(double num1, double num2)
        {
            return num1 / num2;
        }    
    }
}