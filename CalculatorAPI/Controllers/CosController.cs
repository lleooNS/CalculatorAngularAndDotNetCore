using System;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CosController : ControllerBase
    {
        [HttpGet("{num1}")]
        public double Cos(double num1)
        {
            return Math.Cos(num1);
        }     
    }
}