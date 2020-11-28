using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Net;
using System.IO;

//  c'est un lib pas un projet domc juste du code a tester
// en mode projet fonctionne bien et affiche un contenu de l'API.
namespace streamer
{

    public class Value
    {
        public int id { get; set; }
        public string joke { get; set; }
    }

    public class Joke
    {
        public string type { get; set; }
        public Value value { get; set; }
    }
    public class Program
    {
        private string getContent()
        {
            WebRequest request = HttpWebRequest.Create("http://api.icndb.com/jokes/random?firstName=");
            WebResponse response = request.GetResponse();
            StreamReader reader = new StreamReader(response.GetResponseStream());

            string Joke_JSON = reader.ReadToEnd();

            Joke myJoke = Newtonsoft.Json.JsonConvert.DeserializeObject<Joke>(Joke_JSON);
            return "<html><body>" + myJoke.value.joke + "<html><body>";
        }
        static void Main(string[] args)
        {
            Streamer stremRocket = new Streamer();
            Console.WriteLine(stremRocket.getContent());

        }
    }

}
