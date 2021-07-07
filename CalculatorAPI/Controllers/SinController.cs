using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SinController : ControllerBase
    {
        [HttpGet("{num1}")]
        public double Sin(double num1)
        {
            return Math.Sin(num1);
        }      
    }
}