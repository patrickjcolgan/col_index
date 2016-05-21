//Perhaps our Metro instances will be stored here?
var allMetro = [];

//Object Constructor function to store Metro data
function Metro(name, metroArea, state, colIndex, income, longitude, latitude, grocery, housing, utilities, transportation, healthcare, miscellaneous) { //do we need parameters??
  this.name = name;
  this.metroArea = metroArea;
  this.state = state;
  this.colIndex = colIndex;
  this.income = income;
  this.grocery = grocery;
  this.housing = housing;
  this.utilities = utilities;
  this.transportation = transportation;
  this.healthcare = healthcare;
  this.miscellaneous = miscellaneous;
  this.longitude = longitude;
  this.latitude = latitude;
  allMetro.push(this);
};
//Google Maps
// var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

//new instances
//new cityName = new City ()

//new MetroName = new Metro ()
var AkronOH = new Metro("AkronOH", "Akron", "OH", 100.2, 50100, 6831.5, 14456.5, 5395, 6426, 1736, 15360, 41.081445, -81.519005);
var AlbanyNY = new Metro("AlbanyNY", "Albany", "NY", 108.1, 54050, 6825, 16327, 5050, 6168, 2234, 17376, 42.652579, -73.756232);
var AnchorageAK = new Metro("AnchorageAK", "Anchorage", "AK", 128.4, 64200, 8742.5, 20720.5, 4705, 7320, 2714, 19968, 61.218056, -149.900278);
var ArlingtonTX = new Metro("ArlingtonTX", "Arlington", "TX", 99.3, 49650, 6136, 12963, 5495, 5898, 2108, 17024, 32.735687, -97.108066);
var AshevilleNC = new Metro("AshevilleNC", "Asheville", "NC", 101.1, 50550, 6799, 14181, 5655, 5652, 2094, 16096, 35.595058, -82.551487);
var AtlantaGA = new Metro("AtlantaGA", "Atlanta", "GA", 95.6, 47800, 6253, 13151.5, 4315, 5958, 2066, 16048, 33.748995, -84.387982);
var AugustaGA = new Metro("AugustaGA", "Augusta", "GA", 93.2, 46600, 6890, 11513, 4605, 5634, 2028, 15904, 33.473498, -82.010515);
var AustinTX = new Metro("AustinTX", "Austin", "TX", 95.5, 47750, 5804.5, 12339.5, 5535, 6012, 2006, 16064, 30.267153, -97.743061);
var BakersfieldCA = new Metro("BakersfieldCA", "Bakersfield", "CA", 103.4, 51700, 6994, 14268, 5215, 6678, 2144, 16496, 35.373292, -119.018712);
var BaltimoreMD = new Metro("BaltimoreMD", "Baltimore", "MD", 119.4, 59700, 7202, 22533, 5625, 6318, 1958, 16000, 39.290385, -76.612189);
var BatonRougeLA = new Metro("BatonRougeLA", "Baton Rouge", "LA", 96.1, 48050, 6526, 14819, 3910, 5424, 1954, 15328, 30.458283, -91.14032);
var BirminghamAL = new Metro("BirminghamAL", "Birmingham", "AL", 90.8, 45400, 6077.5, 10614, 5285, 5610, 1758, 16048, 33.520661, -86.80249);
var BoiseID = new Metro("BoiseID", "Boise", "ID", 97.2, 48600, 6402.5, 12180, 4980, 6480, 2132, 16528, 43.61871, -116.214607);
var BostonMA = new Metro("BostonMA", "Boston", "MA", 132.5, 66250, 7585.5, 22141.5, 6930, 6270, 2470, 20576, 42.360082, -71.05888);
var BozemanMT = new Metro("BozemanMT", "Bozeman", "MT", 102, 51000, 6974.5, 14761, 4455, 6096, 2048, 16640, 45.676998, -111.042934);
var BuffaloNY = new Metro("BuffaloNY", "Buffalo", "NY", 95.8, 47900, 5967, 14123, 5780, 6288, 1840, 14016, 42.886447, -78.878369);
var CedarRapidsIA = new Metro("CedarRapidsIA", "Cedar Rapids", "IA", 92, 46000, 6162, 11469.5, 5080, 5826, 1888, 15600, 41.97788, -91.665623);
var ChampaignUrbanaIL = new Metro("ChampaignUrbanaIL", "Champaign - Urbana", "IL", 96.9, 48450, 6402.5, 13166, 4855, 5892, 2010, 16112, 40.110588, -88.20727);
var ChapelHillNC = new Metro("ChapelHillNC", "Chapel Hill", "NC", 113, 56500, 6558.5, 18415, 4285, 7368, 2116, 17936, 35.9132, -79.055845);
var CharlestonWV = new Metro("CharlestonWV", "Charleston", "WV", 92.7, 46350, 5772, 12948.5, 4835, 6174, 1878, 14864, 38.34982, -81.632623);
var CharlestonNCharlestonSC = new Metro("CharlestonNCharlestonSC", "Charleston - North Charleston", "SC", 98.3, 49150, 6870.5, 13427, 4830, 5634, 2088, 16240, 32.85462, -79.97481);
var CharlotteNC = new Metro("CharlotteNC", "Charlotte", "NC", 93.2, 46600, 6311.5, 11527.5, 4560, 5742, 2206, 16224, 35.227087, -80.843127);
var CharlottesvilleVA = new Metro("CharlottesvilleVA", "Charlottesville", "VA", 107, 53500, 6578, 17777, 5040, 5436, 1890, 16640, 38.029306, -78.476678);
var ChattanoogaTN = new Metro("ChattanoogaTN", "Chattanooga", "TN", 91.1, 45550, 6331, 12180, 4125, 5784, 1866, 15312, 35.04563, -85.30968);
var CheyenneWY = new Metro("CheyenneWY", "Cheyenne", "WY", 100.5, 50250, 6610.5, 15645.5, 4815, 5700, 1966, 15440, 41.139981, -104.820246);
var ChicagoIL = new Metro("ChicagoIL", "Chicago", "IL", 116.9, 58450, 7228, 19546, 5865, 6990, 2170, 16704, 41.878114, -87.629798);
var CincinnatiOH = new Metro("CincinnatiOH", "Cincinnati", "OH", 93.8, 46900, 6266, 11875.5, 5190, 5880, 1916, 15792, 39.103118, -84.51202);
var ClevelandOH = new Metro("ClevelandOH", "Cleveland", "OH", 101, 50500, 7026.5, 13528.5, 5450, 6084, 2086, 16336, 41.49932, -81.694361);
var ColoradoSpringsCO = new Metro("ColoradoSpringsCO", "Colorado Springs", "CO", 92.8, 46400, 6201, 13340, 4340, 5772, 2046, 14736, 38.833882, -104.821363);
var ColumbiaMO = new Metro("ColumbiaMO", "Columbia", "MO", 91.8, 45900, 6019, 11803, 4520, 5778, 1928, 15856, 38.951705, -92.334072);
var ColumbiaSC = new Metro("ColumbiaSC", "Columbia", "SC", 100.4, 50200, 6838, 11933.5, 5450, 6120, 2124, 17696, 34.00071, -81.034814);
var ColumbusOH = new Metro("ColumbusOH", "Columbus", "OH", 92, 46000, 5954, 12499, 5010, 5946, 2154, 14496, 39.961176, -82.998794);
var CorpusChristiTX = new Metro("CorpusChristiTX", "Corpus Christi", "TX", 90.8, 45400, 5356, 11542, 5675, 5598, 1856, 15360, 27.800583, -97.396381);
var DallasTX = new Metro("DallasTX", "Dallas", "TX", 91.9, 45950, 6253, 10251.5, 5275, 6054, 2076, 16064, 32.776664, -96.796988);
var DavenportMolineRockIsIAIL = new Metro("DavenportMolineRockIsIAIL", "Davenport - Moline - Rock Island", "IL", 96.8, 48400, 6415.5, 14311.5, 4070, 6258, 1958, 15488, 41.519018, -90.542196);
var DaytonOH = new Metro("DaytonOH", "Dayton", "OH", 91.4, 45700, 5798, 10802.5, 5305, 6186, 1864, 15840, 39.758948, -84.191607);
var DecaturIL = new Metro("DecaturIL", "Decatur", "IL", 91.4, 45700, 5791.5, 12789, 4610, 5802, 1838, 14928, 39.840315, -88.9548);
var DenverCO = new Metro("DenverCO", "Denver", "CO", 103.2, 51600, 6565, 15587.5, 5095, 5724, 2118, 16432, 39.739236, -104.990251);
var DesMoinesIA = new Metro("DesMoinesIA", "Des Moines", "IA", 90.9, 45450, 5908.5, 12992, 4510, 5754, 1816, 14544, 41.600545, -93.609106);
var DetroitMI = new Metro("DetroitMI", "Detroit", "MI", 99.4, 49700, 6025.5, 13804, 6475, 6078, 1884, 15456, 42.331427, -83.045754);
var DoverDE = new Metro("DoverDE", "Dover", "DE", 99.7, 49850, 7176, 13180.5, 5440, 5850, 2060, 16112, 39.158168, -75.524368);
var DubuqueIA = new Metro("DubuqueIA", "Dubuque", "IA", 95.9, 47950, 6376.5, 12542.5, 5260, 5970, 1930, 15920, 42.500558, -90.664572);
var DurhamNC = new Metro("DurhamNC", "Durham", "NC", 96.6, 48300, 6363.5, 12586, 4815, 6330, 2170, 16096, 35.994033, -78.898619);
var ElPasoTX = new Metro("ElPasoTX", "El Paso", "TX", 90.4, 45200, 6493.5, 12470, 4405, 5820, 1908, 14160, 31.761878, -106.485022);
var EugeneOR = new Metro("EugeneOR", "Eugene", "OR", 109.8, 54900, 6097, 19183.5, 4265, 6600, 2364, 16464, 44.052069, -123.086754);
var EverettWA = new Metro("EverettWA", "Everett", "WA", 111.3, 55650, 7280, 18574.5, 4270, 6624, 2582, 16336, 47.978985, -122.202079);
var FairbanksAK = new Metro("FairbanksAK", "Fairbanks", "AK", 137.4, 68700, 8313.5, 21532.5, 9655, 7122, 2898, 19008, 64.837778, -147.716389);
var FargoMoorheadNDMN = new Metro("FargoMoorheadNDMN", "Fargo - Moorhead", "ND", 92.7, 46350, 6487, 12673, 3935, 5748, 2048, 15456, 46.841988, -96.716831);
var FlagstaffAZ = new Metro("FlagstaffAZ", "Flagstaff", "AZ", 114.9, 57450, 6929, 21648.5, 4625, 6330, 2000, 15920, 35.198284, -111.651302);
var FortLauderdaleFL = new Metro("FortLauderdaleFL", "Fort Lauderdale", "FL", 115.7, 57850, 7312.5, 20880, 4625, 6378, 2048, 16592, 26.122439, -80.137317);
var FortWayneIN = new Metro("FortWayneIN", "Fort Wayne", "IN", 94.4, 47200, 6064.5, 12948.5, 4365, 6414, 1868, 15680, 41.079273, -85.139351);
var FortWorthTX = new Metro("FortWorthTX", "Fort Worth", "TX", 91.1, 45550, 5837, 11310, 5310, 5856, 1876, 15376, 32.755488, -97.330766);
var FresnoCA = new Metro("FresnoCA", "Fresno", "CA", 117.3, 58650, 7527, 19024, 6180, 6870, 2136, 16944, 36.746842, -119.772587);
var GainesvilleFL = new Metro("GainesvilleFL", "Gainesville", "FL", 99.8, 49900, 6909.5, 14761, 4960, 6198, 1854, 15280, 29.651634, -82.324826);
var GrandJunctionCO = new Metro("GrandJunctionCO", "Grand Junction", "CO", 98.3, 49150, 6623.5, 15283, 4320, 5946, 2076, 14896, 39.063871, -108.550649);
var GrandRapidsMI = new Metro("GrandRapidsMI", "Grand Rapids", "MI", 90.7, 45350, 6675.5, 11252, 5030, 6222, 1880, 14400, 42.96336, -85.668086);
var GreenBayWI = new Metro("GreenBayWI", "Green Bay", "WI", 95.1, 47550, 5772, 12107.5, 5930, 6012, 2118, 15632, 44.519159, -88.019826);
var GreenvilleNC = new Metro("GreenvilleNC", "Greenville", "NC", 98.5, 49250, 6883.5, 12238, 5425, 5856, 2270, 16528, 35.612661, -77.366354);
var GreenvilleSC = new Metro("GreenvilleSC", "Greenville", "SC", 90.3, 45150, 6675.5, 10570.5, 4505, 5826, 1964, 15632, 34.852618, -82.39401);
var HarrisburgPA = new Metro("HarrisburgPA", "Harrisburg", "PA", 99.7, 49850, 6357, 13267.5, 5525, 6012, 1876, 16816, 40.273191, -76.886701);
var HartfordCT = new Metro("HartfordCT", "Hartford", "CT", 121.8, 60900, 7845.5, 19981, 6035, 6540, 2260, 18160, 41.763711, -72.685093);
var HonoluluHI = new Metro("HonoluluHI", "Honolulu", "HI", 165.7, 82850, 10406.5, 36105, 7330, 7572, 2400, 18864, 21.306944, -157.858333);
var HotSpringsAR = new Metro("HotSpringsAR", "Hot Springs", "AR", 93.8, 46900, 6324.5, 12368.5, 4785, 5136, 1696, 16464, 34.5037, -93.05518);
var HoustonTX = new Metro("HoustonTX", "Houston", "TX", 92.2, 46100, 5531.5, 11890, 4885, 5952, 1892, 15984, 29.760427, -95.369803);
var HuntsvilleAL = new Metro("HuntsvilleAL", "Huntsville", "AL", 91.2, 45600, 6168.5, 11411.5, 4305, 5982, 1840, 15968, 34.730369, -86.586104);
var IdahoFallsID = new Metro("IdahoFallsID", "Idaho Falls", "ID", 90.6, 45300, 6467.5, 11310, 4245, 6126, 1864, 15408, 43.491651, -112.033965);
var IndianapolisIN = new Metro("IndianapolisIN", "Indianapolis", "IN", 87.2, 43600, 5941, 10643, 4335, 6030, 1872, 14896, 39.768403, -86.158068);
var IowaMetroIA = new Metro("IowaMetroIA", "Iowa Metro", "IA", 96.2, 48100, 6168.5, 14108.5, 4005, 6168, 1908, 15840, 41.661128, -91.530168);
var IthacaNY = new Metro("IthacaNY", "Ithaca", "NY", 102.8, 51400, 6688.5, 15138, 5520, 6282, 2132, 15696, 42.443961, -76.501881);
var JacksonMS = new Metro("JacksonMS", "Jackson", "MS", 96.9, 48450, 6045, 13630, 5905, 5520, 1914, 15376, 32.298757, -90.18481);
var JacksonvilleFL = new Metro("JacksonvilleFL", "Jacksonville", "FL", 92.9, 46450, 6682, 11600, 4595, 6216, 1890, 15568, 30.332184, -81.655651);
var JeffersonMetroMO = new Metro("JeffersonMetroMO", "Jefferson Metro", "MO", 92.9, 46450, 6103.5, 11382.5, 4880, 5598, 1900, 16544, 38.576702, -92.173516);
var JolietWillCountyIL = new Metro("JolietWillCountyIL", "Joliet - Will County", "IL", 102.2, 51100, 6558.5, 14833.5, 5805, 6678, 2130, 15232, 41.525031, -88.081725);
var JoplinMO = new Metro("JoplinMO", "Joplin", "MO", 88.8, 44400, 5993, 11005.5, 5405, 5508, 1790, 14720, 37.084227, -94.513281);
var JuneauAK = new Metro("JuneauAK", "Juneau", "AK", 136.5, 68250, 8651.5, 24026.5, 6755, 7272, 2888, 18576, 58.301944, -134.419722);
var KalamazooMI = new Metro("KalamazooMI", "Kalamazoo", "MI", 91.2, 45600, 6214, 11788.5, 5090, 5964, 1850, 14784, 42.291707, -85.587229);
var KalispellMT = new Metro("KalispellMT", "Kalispell", "MT", 98.8, 49400, 7559.5, 13847.5, 4100, 6216, 2096, 15648, 48.191989, -114.316813);
var KansasMetroMO = new Metro("KansasMetroMO", "Kansas Metro", "MO", 97.8, 48900, 6162, 12934, 4990, 6048, 1944, 16816, 39.099727, -94.578567);
var KnoxvilleTN = new Metro("KnoxvilleTN", "Knoxville", "TN", 89.4, 44700, 5941, 11890, 4755, 5052, 1768, 15216, 35.960638, -83.920739);
var KodiakAK = new Metro("KodiakAK", "Kodiak", "AK", 128.7, 64350, 9711, 18531, 6595, 8604, 2614, 18464, 57.79, -152.407222);
var LafayetteIN = new Metro("LafayetteIN", "Lafayette", "IN", 98.2, 49100, 6214, 11948, 5825, 6372, 2326, 16432, 40.416702, -86.875287);
var LafayetteLA = new Metro("LafayetteLA", "Lafayette", "LA", 99.2, 49600, 6077.5, 15964.5, 4060, 6240, 1776, 15568, 30.22409, -92.019843);
var LakeCharlesLA = new Metro("LakeCharlesLA", "Lake Charles", "LA", 97.4, 48700, 6487, 14993, 4475, 5826, 1688, 15264, 30.226595, -93.217376);
var LakeHavasuMetroAZ = new Metro("LakeHavasuMetroAZ", "Lake Havasu Metro", "AZ", 111.8, 55900, 6955, 20198.5, 4795, 5610, 1960, 16272, 34.483901, -114.322455);
var LaramieWY = new Metro("LaramieWY", "Laramie", "WY", 97, 48500, 6831.5, 14833.5, 4525, 5496, 1950, 14832, 41.311367, -105.591101);
var LasVegasNV = new Metro("LasVegasNV", "Las Vegas", "NV", 101.9, 50950, 6942, 13644.5, 4885, 6294, 2180, 16992, 36.169941, -115.13983);
var LawrenceKS = new Metro("LawrenceKS", "Lawrence", "KS", 94.6, 47300, 5791.5, 13920, 4595, 5772, 1950, 15296, 38.971669, -95.23525);
var LexingtonKY = new Metro("LexingtonKY", "Lexington", "KY", 92.8, 46400, 5648.5, 12861.5, 4695, 5856, 1874, 15536, 38.040584, -84.503716);
var LittleRockAR = new Metro("LittleRockAR", "Little Rock", "AR", 96.5, 48250, 6038.5, 13369, 5205, 5640, 18700, 16064, 34.833332, -92.253891);
var LoganUT = new Metro("LoganUT", "Logan", "UT", 95.6, 47800, 6805.5, 9918, 4265, 6816, 19440, 18192, 41.73698, -111.833836);
var LosAlamosNM = new Metro("LosAlamosNM", "Los Alamos", "NM", 109.7, 54850, 6311.5, 18574.5, 4560, 6642, 2052, 16752, 35.880036, -106.303114);
var LosAngelesCA = new Metro("LosAngelesCA", "Los Angeles", "CA", 136.4, 68200, 6890, 30029.5, 5085, 6816, 2182, 17120, 33.77005, -118.193739);
var LouisvilleKY = new Metro("LouisvilleKY", "Louisville", "KY", 87.7, 438500, 5304, 11411.5, 4955, 5814, 17440, 14704, 38.252665, -85.758456);
var LovelandCO = new Metro("LovelandCO", "Loveland", "CO", 91, 45500, 6675.5, 11498.5, 4480, 5484, 2006, 15312, 40.397761, -105.07498);
var LubbockTX = new Metro("LubbockTX", "Lubbock", "TX", 89.1, 44550, 5850, 11658, 3740, 5856, 1966, 15536, 33.577863, -101.855166);
var LynchburgVA = new Metro("LynchburgVA", "Lynchburg", "VA", 95.1, 47550, 5895.5, 13441.5, 5485, 5328, 2002, 15328, 37.413754, -79.142246);
var MemphisTN = new Metro("MemphisTN", "Memphis", "TN", 88.2, 44100, 6025.5, 11049, 4345, 5490, 1972, 15232, 34.724776, -100.534014);
var MiamiFL = new Metro("MiamiFL", "Miami", "FL", 106, 53000, 7208.5, 15616.5, 4595, 6528, 2114, 16992, 25.76168, -80.19179);
var MilwaukeeWI = new Metro("MilwaukeeWI", "Milwaukee", "WI", 101.9, 50950, 6376.5, 16341.5, 4930, 5952, 2162, 15168, 43.038902, -87.906474);
var MinneapolisMN = new Metro("MinneapolisMN", "Minneapolis", "MN", 111, 55500, 7254, 16936, 5235, 6222, 2108, 17664, 44.977753, -93.265011);
var MinotND = new Metro("MinotND", "Minot", "ND", 99.9, 49950, 6454.5, 13905.5, 3675, 5892, 1820, 18176, 48.232967, -101.292291);
var MissoulaMT = new Metro("MissoulaMT", "Missoula", "MT", 99.4, 49700, 7163, 13369, 4915, 6132, 2144, 16016, 46.878718, -113.996586);
var MobileAL = new Metro("MobileAL", "Mobile", "AL", 92.7, 46350, 6675.5, 11658, 5220, 5580, 1730, 15472, 30.695366, -88.039891);
var MonroeLA = new Metro("MonroeLA", "Monroe", "LA", 92.7, 46350, 6227, 12035, 4455, 5850, 1920, 15888, 31.511907, -87.460397);
var MontgomeryAL = new Metro("MontgomeryAL", "Montgomery", "AL", 99.2, 49600, 6688.5, 13920, 5420, 5976, 1760, 15856, 32.366805, -86.299969);
var MyrtleBeachSC = new Metro("MyrtleBeachSC", "Myrtle Beach", "SC", 95.2, 47600, 6870.5, 11368, 5225, 5682, 2008, 16384, 33.68906, -78.886694);
var NashvilleTN = new Metro("NashvilleTN", "Nashville - Franklin", "TN", 88.9, 44450, 5960.5, 10338.5, 4130, 5550, 1746, 16720, 36.184418, -86.738475);
var NassauCountyNY = new Metro("NassauCountyNY", "Nassau County", "NY", 145.7, 72850, 7995, 29971.5, 7035, 6786, 2394, 18448, 40.654615, -73.559413);
var NewHavenCT = new Metro("NewHavenCT", "New Haven", "CT", 122.1, 61050, 7663.5, 19560.5, 6175, 6378, 2254, 18864, 41.308274, -72.927884);
var NewYorkBrooklynNY = new Metro("NewYorkBrooklynNY", "New York (Brooklyn)", "NY", 181.7, 90850, 8489, 46081, 8250, 6180, 2230, 19120, 40.678178, -73.944158);
var NewYorkManhattanNY = new Metro("NewYorkManhattanNY", "New York (Manhattan)", "NY", 216.7, 108350, 10029.5, 56071.5, 8480, 7218, 2604, 23312, 40.78306, -73.971249);
var NewYorkQueensNY = new Metro("NewYorkQueensNY", "New York (Queens)", "NY", 159, 79500, 8339.5, 33466, 8600, 6528, 2360, 19824, 40.728224, -73.794852);
var NewarkElizabethNJ = new Metro("NewarkElizabethNJ", "Newark - Elizabeth", "NJ", 129.7, 64850, 7254, 24432.5, 6460, 6234, 2062, 18224, 40.681815, -74.208273);
var NormanOK = new Metro("NormanOK", "Norman", "OK", 94.4, 47200, 6194.5, 12861.5, 4580, 6240, 1932, 15488, 35.222567, -97.439478);
var OaklandCA = new Metro("OaklandCA", "Oakland", "CA", 139.1, 69550, 7592, 28826, 4735, 6816, 2398, 19040, 37.804364, -122.271114);
var OdessaTX = new Metro("OdessaTX", "Odessa", "TX", 90.9, 45450, 5928, 12774.5, 4440, 5616, 1932, 14784, 31.845682, -102.367643);
var OklahomaMetroOK = new Metro("OklahomaMetro(OK", "Oklahoma Metro", "OK", 91.7, 45850, 6038.5, 12470, 4405, 5556, 1988, 15392, 35.46756, -97.516428);
var OlympiaWA = new Metro("OlympiaWA", "Olympia", "WA", 104.1, 52050, 6981, 14819, 4105, 6894, 2410, 16960, 47.037874, -122.900695);
var OmahaNE = new Metro("OmahaNE", "Omaha", "NE", 88.3, 44150, 5980, 11498.5, 4495, 6000, 1936, 14352, 41.252363, -95.997988);
var OrangeCountyCA = new Metro("OrangeCountyCA", "Orange County", "CA", 146.4, 73200, 6792.5, 35206, 5160, 6876, 2232, 16832, 33.717471, -117.831143);
var OrlandoFL = new Metro("OrlandoFL", "Orlando", "FL", 97.8, 48900, 6357, 12383, 5425, 6108, 1910, 16720, 28.538335, -81.379236);
var PeoriaIL = new Metro("PeoriaIL", "Peoria", "IL", 96.3, 48150, 6071, 13775, 4860, 6084, 1916, 15488, 40.693649, -89.588986);
var PhiladelphiaPA = new Metro("PhiladelphiaPA", "Philadelphia", "PA", 126.5, 63250, 8118.5, 20488.5, 6795, 6348, 2164, 19136, 39.952584, -75.165222);
var PhoenixAZ = new Metro("PhoenixAZ", "Phoenix", "AZ", 100.7, 50350, 7026.5, 13108, 4830, 6534, 2176, 16736, 33.448377, -112.074037);
var PittsburghPA = new Metro("PittsburghPA", "Pittsburgh", "PA", 91.5, 45750, 6766.5, 10788, 4850, 6354, 1802, 15328, 40.440625, -79.995886);
var PlanoTX = new Metro("PlanoTX", "Plano", "TX", 97.4, 48700, 6584.5, 12354, 5195, 6108, 2058, 16416, 33.019843, -96.698886);
var PortlandME = new Metro("PortlandME", "Portland", "ME", 116.5, 58250, 6617, 20735, 5145, 6708, 2194, 16880, 43.661471, -70.255326);
var PortlandOR = new Metro("PortlandOR", "Portland", "OR", 111.3, 55650, 6877, 18966, 4355, 6348, 2272, 16816, 45.523062, -122.676482);
var ProvidenceRI = new Metro("ProvidenceRI", "Providence", "RI", 123.3, 61650, 7371, 18705, 6450, 6150, 2264, 20496, 41.823989, -71.412834);
var RaleighNC = new Metro("RaleighNC", "Raleigh", "NC", 98.2, 49100, 6773, 12876, 5280, 5802, 2020, 16304, 35.77959, -78.638179);
var RenoSparksNV = new Metro("RenoSparksNV", "Reno - Sparks", "NV", 101.1, 50550, 6851, 14717.5, 4560, 6438, 2036, 16000, 39.516934, -119.816219);
var RichmondVA = new Metro("RichmondVA", "Richmond", "VA", 104.5, 52250, 6734, 14964, 5695, 6048, 2252, 16512, 37.540725, -77.436048);
var RoanokeVA = new Metro("RoanokeVA", "Roanoke", "VA", 94.1, 47050, 5830.5, 13369, 5205, 5466, 1958, 15168, 37.27097, -79.941427);
var RochesterMN = new Metro("RochesterMN", "Rochester", "MN", 99.2, 49600, 5824, 13209.5, 5240, 6378, 2190, 16800, 44.012122, -92.480199);
var RochesterNY = new Metro("RochesterNY", "Rochester", "NY", 100, 50000, 6149, 13659, 5720, 6522, 1994, 16032, 43.16103, -77.610922);
var RoswellNM = new Metro("RoswellNM", "Roswell", "NM", 95.9, 47950, 6864, 12020.5, 5215, 5850, 2024, 15984, 33.394266, -104.523024);
var SacramentoCA = new Metro("SacramentoCA", "Sacramento", "CA", 116.2, 58100, 7455.5, 19676.5, 5480, 6864, 2216, 16448, 38.581572, -121.4944);
var SaltLakeMetroUT = new Metro("SaltLakeMetroUT", "Salt Lake Metro", "UT", 100.6, 50300, 6506.5, 15660, 3625, 6126, 1976, 16464, 40.760779, -111.891047);
var SanAntonioTX = new Metro("SanAntonioTX", "San Antonio", "TX", 95.7, 47850, 5518.5, 13818.5, 4140, 6042, 1998, 16352, 29.424122, -98.493628);
var SanDiegoCA = new Metro("SanDiegoCA", "San Diego", "CA", 132.3, 66150, 6857.5, 28188, 5095, 6786, 2230, 16928, 32.715738, -117.161084);
var SanFranciscoCA = new Metro("SanFranciscoCA", "San Francisco", "CA", 164, 82000, 7273.5, 40745, 4725, 6780, 2340, 19888, 37.774929, -122.419416);
var SanJoseCA = new Metro("SanJoseCA", "San Jose", "CA", 156.1, 78050, 7494.5, 37743.5, 6860, 6840, 2380, 16576, 37.338208, -121.886329);
var SanMarcosTX = new Metro("SanMarcosTX", "San Marcos", "TX", 94.8, 47400, 5765.5, 14514.5, 4340, 5406, 1852, 15488, 29.883275, -97.941394);
var SarasotaFL = new Metro("SarasotaFL", "Sarasota", "FL", 101.5, 50750, 7000.5, 14920.5, 4870, 6150, 2104, 15696, 27.336435, -82.530653);
var SavannahGA = new Metro("SavannahGA", "Savannah", "GA", 93.5, 46750, 6155.5, 12180, 4700, 5904, 1980, 15856, 32.083541, -81.099834);
var SeattleWA = new Metro("SeattleWA", "Seattle", "WA", 121.4, 60700, 7481.5, 20343.5, 4285, 7128, 2398, 19056, 47.606209, -122.332071);
var ShreveportBossierMetroLA = new Metro("ShreveportBossierMetroLA", "Shreveport - Bossier Metro", "LA", 95.3, 47650, 6188, 13557.5, 4470, 5604, 1862, 15936, 32.525152, -93.750179);
var SierraVistaAZ = new Metro("SierraVistaAZ", "Sierra Vista", "AZ", 97.9, 48950, 6272.5, 14456.5, 4860, 6240, 1922, 15280, 31.5455, -110.277286);
var SiouxFallsSD = new Metro("SiouxFallsSD", "Sioux Falls", "SD", 94.1, 47050, 5947.5, 12557, 5080, 5214, 2044, 16096, 43.544596, -96.731103);
var SpokaneWA = new Metro("SpokaneWA", "Spokane", "WA", 93.9, 46950, 6006, 12426.5, 4475, 6546, 2200, 15440, 47.65878, -117.426047);
var SpringfieldIL = new Metro("SpringfieldIL", "Springfield", "IL", 85.8, 42900, 5830.5, 10164.5, 3990, 6270, 2130, 14672, 39.781721, -89.650148);
var SpringfieldMO = new Metro("SpringfieldMO", "Springfield", "MO", 88, 44000, 6058, 11136, 4160, 5808, 1906, 15008, 37.208957, -93.292299);
var StCloudMN = new Metro("StCloudMN", "St. Cloud", "MN", 98.3, 49150, 6610.5, 11701.5, 5860, 5994, 2040, 16928, 45.557945, -94.16324);
var StGeorgeUT = new Metro("StGeorgeUT", "St. George", "UT", 95.9, 47950, 6493.5, 13659, 4295, 6024, 1756, 15744, 37.096528, -113.568416);
var StLouisMO = new Metro("StLouisMO", "St. LouisMO", "MO", 90.4, 45200, 6396, 10817, 4645, 5940, 2016, 15440, 38.627003, -90.199404);
var StPaulMN = new Metro("StPaulMN", "St. Paul", "MN", 110, 55000, 6955, 16370.5, 5340, 6204, 2134, 17952, 44.953703, -93.089958);
var StamfordCT = new Metro("StamfordCT", "Stamford", "CT", 146.9, 73450, 7917, 30827, 6065, 6600, 2266, 19536, 41.05343, -73.538734);
var SyracuseNY = new Metro("SyracuseNY", "Syracuse", "NY", 101.5, 50750, 6409, 13253, 5920, 6498, 1956, 16768, 43.048122, -76.147424);
var TacomaWA = new Metro("TacomaWA", "Tacoma", "WA", 109.5, 54750, 7234.5, 16907, 4155, 6540, 2302, 17632, 47.252877, -122.444291);
var TampaFL = new Metro("TampaFL", "Tampa", "FL", 92.4, 46200, 6259.5, 12281.5, 4690, 6198, 1968, 14944, 27.950575, -82.457178);
var TopekaKS = new Metro("TopekaKS", "Topeka", "KS", 91.8, 45900, 6038.5, 12180, 4290, 5844, 1864, 15696, 39.055824, -95.689018);
var TucsonAZ = new Metro("TucsonAZ", "Tucson", "AZ", 96.5, 48250, 6318, 13325.5, 4335, 6276, 1984, 16080, 32.221743, -110.926479);
var TulsaOK = new Metro("TulsaOK", "Tulsa", "OK", 88.4, 44200, 5973.5, 9642.5, 4760, 5946, 1892, 16080, 36.153982, -95.992775);
var TupeloMS = new Metro("TupeloMS", "Tupelo", "MS", 88.1, 44050, 5921.5, 10483.5, 5505, 5628, 1732, 14832, 34.257607, -88.703386);
var TuscaloosaAL = new Metro("TuscaloosaAL", "Tuscaloosa", "AL", 94.6, 47300, 6818.5, 11687, 5295, 6168, 1804, 15584, 33.209841, -87.569173);
var TwinFallsID = new Metro("TwinFallsID", "Twin Falls", "ID", 91.5, 45750, 6207.5, 11803, 4850, 5952, 1866, 15136, 42.562967, -114.460871);
var VancouverWA = new Metro("VancouverWA", "Vancouver", "WA", 94.8, 47400, 6298.5, 11919, 4590, 6366, 2286, 16016, 45.638728, -122.661486);
var WacoTX = new Metro("WacoTX", "Waco", "TX", 88.9, 44450, 5317, 12832.5, 4265, 5856, 1818, 14480, 31.549333, -97.14667);
var WashingtonArlingtonAlexandriaDCVA = new Metro("WashingtonArlingtonAlexandriaDCVA", "Washington - Arlington - Alexandria", "DC", 140.1, 70050, 7013.5, 32828, 4865, 6558, 2068, 16592, 38.907192, -77.036871);
var WaterlooCedarFallsIA = new Metro("WaterlooCedarFallsIA", "Waterloo - Cedar Falls", "IA", 91.7, 45850, 5817.5, 12992, 4410, 5964, 1918, 14848, 42.534899, -92.445316);
var WichitaKS = new Metro("WichitaKS", "Wichita", "KS", 91.8, 45900, 5882.5, 12122, 4485, 6036, 1934, 15536, 37.687176, -97.330053);
var WilmingtonDE = new Metro("WilmingtonDE", "Wilmington", "DE", 105.2, 52600, 7026.5, 14790, 5770, 5916, 2174, 16832, 39.739072, -75.539788);
var WilmingtonNC = new Metro("WilmingtonNC", "Wilmington", "NC", 98.8, 49400, 7020, 13006.5, 5425, 5856, 2002, 16048, 34.225726, -77.94471);
var WinstonSalemNC = new Metro("WinstonSalemNC", "Winston - Salem", "NC", 92.4, 46200, 6402.5, 12020.5, 4425, 4998, 1986, 16240, 36.09986, -80.244216);
var YoungstownWarrenOH = new Metro("YoungstownWarrenOH", "Youngstown - Warren", "OH", 90.4, 45200, 6019, 11266.5, 5510, 5544, 1738, 15104, 41.079933, -80.66321);
var YumaAZ = new Metro("YumaAZ", "Yuma", "AZ", 101.2, 50600, 6981, 13978, 5610, 6276, 2156, 15616, 32.692651, -114.627692);
