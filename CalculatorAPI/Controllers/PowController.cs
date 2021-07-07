using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PowController : ControllerBase
    {
        [HttpGet("{num1}/{num2}")]
        public double Pow(double num1, double num2)
        {
            return Math.Pow(num1,num2);
        }    
    }
}