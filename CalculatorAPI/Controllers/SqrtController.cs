using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SqrtController : ControllerBase
    {
        [HttpGet("{num1}")]
        public double Sqrt(double num1)
        {
            return Math.Sqrt(num1);
        }     
    }
}