using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MultiplicationController : ControllerBase
    {
        [HttpGet("{num1}/{num2}")]
        public double multiplication(double num1, double num2)
        {
            return num1 * num2;
        }
    }
}