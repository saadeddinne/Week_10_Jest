using System;
using Xunit;

namespace streamer.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var streamer = new Streamer();
            bool result = streamer.getContent().Contains("<html>");
            Assert.success();
        }
    }
}
