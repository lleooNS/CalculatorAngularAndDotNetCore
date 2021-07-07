using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LnController : ControllerBase
    {
        [HttpGet("{num1}")]
        public double Ln(double num1)
        {
            return Math.Log(Math.E, num1);
        }      
    }
}