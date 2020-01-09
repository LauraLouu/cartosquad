
# Area Visualization
Polygon features represent a distributed and defined area which has two dimensions: length and width. Areal phenomena also can be categorized in conceptual and observable features. Examples are:

-	Water bodies 
-	Buildings 
-	Administrative areas, e.g. states, counties
-	Landuse and landcover
-	Geology and soil
-	Points of interest (large scales)

## Visual Variables used for Area Symbols

See also [Visual Variables](/Guide/visvar.html).

The obvious choice of variables for areas are color (value & hue) as well as pattern. The variables shape are not actually used for areal features, as the outline of the polygon represents the corresponding area. However, multiple shapes, combined with differing sizes, can be used to create a pattern and therefore distinguish the features from one another. Forests are often categorized by applying shapes of conifers, leaf trees or both. Size is applied in [cartograms](#cartograms).

Additionally, but not ideally, orientation may be used with patterns, to represent differences in kind. 

Apart from hue, pattern and orien-tation being used for nominal data, statistical areas are often symbolized by colors or patterns (coarse vs. fine) based on quantitative properties, such as in chloropleth maps. 


## Chloropleth Maps

Chloropleth maps show areas symbolized by a color progression depicting a continous variable. It should be used to compare enumeriation areas. A graduated color scale is used for these maps and is explained in the legend to distinct the ranges. Background information is reduced to a minimum. Its simplicity in making a chloropleth map is challenged by the selection of data class intervals as it can influence the outcome immensly (see figure below). Gretchen N. Peterson illustrates in her book *[Cartographer's Toolkit](https://www.amazon.com/Cartographers-Toolkit-Colors-Typography-Patterns/dp/0615467946/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=pe03-20&linkId=81f589a8f8f6ee38f4b9cd7aecf361d2)* the different methods to break data sets as well as its use case, advantages and disadvantages. 

<!--Insert table (ask permission)? ![intervals](PATH TO IMAGE) -->

::: tip NOTE
Chloropleth maps are not limited for areas but can also be applied to line or point features! Area chloropleth maps are the most distributed form.
:::
## Cartograms
Cartograms visualize data of an area by distorting geographic areas based on a thematic value related to that area. Here the visual variable *size* is used for the distortion visualisation. Area cartograms are also known by value-by-area maps. 

::: danger TODO
This site is under construction!
:::

### References
- Axis Maps. *[Bivariate Cartograms](https://www.axismaps.com/guide/multivariate/bivariate-cartograms/)* (accessed 09. Jan 2020). 
- Axis Maps. *[Non-Contiguous Cartograms](https://www.axismaps.com/guide/univariate/cartograms/)* (accessed 09. Jan 2020). 
- Brewer, C. A., 2016. *Designing better maps - A guide for GIS users*. 2nd Edition ed. Redlands: Esri Press.
- Dent, B. D., Torguson, J. S. & Hodler, T. W., 2009. *Cartography - Thematic Map Design*. 6th Edition ed. New York: McGraw-Hill.
- Kraak, M.-J. & Ormeling, F., 2003. *Cartography - Visualization of Geospatial Data*. 2nd Edition ed. Essex: Pearson Education Limited.
- Peterson, G.N., 2012. *Cartographer's Toolkit*. PetersonGIS. 
- Roth, Robert. (2017). *Visual Variables*. 10.1002/9781118786352.wbieg0761. 
- Tyner, J. A., 2010. *Principles of Map Design*. New York: Guilford Press.
- Tyner, J. A., 1992. *Introduction to Thematic Cartography*. New Jersey: Prentice-Hall Inc. 
- UCGIS. *CV-08 - [Symbolization and the Visual Variables](https://gistbok.ucgis.org/bok-topics/symbolization-and-visual-variables)* (accessed 14 Aug 2019).