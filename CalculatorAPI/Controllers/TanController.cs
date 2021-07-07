using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TanController : ControllerBase
    {
        [HttpGet("{num1}")]
        public double Tan(double num1)
        {
            return Math.Tan(num1);
        }     
    }
}