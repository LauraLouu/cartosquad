
# Visual Variables
>"The term ‘visual variables’ is commonly used to describe the various perceived differences in map symbols that are used to represent geographic phenomena." (Slocum, et al. 2009, p. 81).

Cartographers should pay special attention to match a design between the different symbols as the smallest details can change how the geographical data is interpreted. The individual feature groups demand a different combination of Bertin’s visual variables (see below). J. Bertin proposed these variables in 1983 to differentiate the symbols by values and characteristics they represent. Often other variables such as spacing, focus, and arrangement are mentioned. As for shading and transparency are often used to develop a feeling of a third dimension, as shadows enhance immersion creating a contrast between object and background and inviting the user to click on it. Transparency on the other hand often occurs when objects are “faded out” to cease distraction and let the user focus on other information.


::: danger TODO
This part is under construction!
:::

## Characteristics
When considering styling an object with these variables, the purpose should be considered. Depending on that, some variables are more suited than others. Characteristic supporting certein purposes are:

1. **Selective**: A group of symbols is perceived as such based on a change in the variable, i.e. a category can be given to the group. 

![selective](PATH TO IMAGE)

2. **Associative**: A variable is associative if the user is able to group symbols despite changes in other variables, e.g. different shaped symbols in a certain color can be either grouped by shape or color. 

![associative](PATH TO IMAGE)

3. **Order**: If objects can be easily recognized as sequence, meaning the symbols can be ordered by their difference, it is an ordered variable. 

![order](PATH TO IMAGE)

4. **Quantitative**: A visual variable is considered quantitative if a numerical difference can be derived. 

![quantitative](PATH TO IMAGE)

5. **Length**: The amount of values is defined by length, i.e. how many distinctions are perceptible. 

![length](PATH TO IMAGE)


## Variables 

**Shape** is the change of the external form.  
*selective, associative, length*

**Size** refers to the difference in dimension of a symbol.  
*selective, associative, order, (quantitative), length*

**(Color) Hue** describes the color itself, such as green, yellow, red.  
*selective, associative, length*

**(Color) Value** is the definition of the color brightness, e.g. light green and dark green.  
*selective, associative, order, (quantitative), length*

**Pattern / Texture** indicates the difference of pattern used to fill a body of object.  
*selective, associative, length*

**Orientation** describes the alignment of features to one another.  
*selective, associative, length*

![visvar](/assets/img/visualvariables.png)

**(Color) Saturation** is the amount of grey in a color and refers to the intensity pf a color. Saturated colors draw more attention an less saturated ones.  
*order, quantitative, length*

**Location / Position** describes the position of a symbol on the map inseid a coordinate reference, i.e. the position on the map symbol in relation to the projected spatial location.   
*selective, associative, order, quantitative, length*

**Arrangement** characterizes the layout of map symbols, either applied in an grid-like, regular arrangement or in more irregular way.  
*(order), (quantitative), length*

**Crispness / Fuzziness** refers to the sharpness of the edge or boundary of a map symbol. Map symbols with a sharp edge draw more attention of the user then map symbols with fuzzy outlines. It can be used to symbolize uncertainty in data.   

**Resolution / Focus** is the spatial precision of a map symbol meaning the degree of [generalization](/Guide/gen.md). It refers to the details of the linework in vector maps. A high level of detail gains more importance as the focus of the user is shifted towards highly detailed features. In raster maps the coarseness and grid-size define resolution.   
*order, (quantitative), (length)*

**Transparency** describes the bkending of layers with the objects depicted underneath.   
*order, quantitative, (length)*


### References
- Axis Maps. *[Visual Hierarchy](https://www.axismaps.com/guide/general/visual-hierarchy/)* (accessed 14 Aug 2019).
- Brewer, C. A., 2016. *Designing better maps - A guide for GIS users*. 2nd Edition ed. Redlands: Esri Press.
- Dent, B. D., Torguson, J. S. & Hodler, T. W., 2009. *Cartography - Thematic Map Design*. 6th Edition ed. New York: McGraw-Hill.
- Kraak, M.-J. & Ormeling, F., 2003. *Cartography - Visualization of Geospatial Data*. 2nd Edition ed. Essex: Pearson Education Limited.
- Krygier, J. & Wood, D., 2016. *Making Maps - A visual Guide to Map Design for GIS*. 3rd Edition ed. s.l.:Guilford Publications.
- Muehlenhaus, I., 2014. *Web Cartography*. Boca Raton: CRC Press.
- Olaya, Victor (2018). *[Introduction to GIS](https://volaya.github.io/gis-book/en/gisbook.pdf)* (accessed 14 Aug 2019).
- Roth, Robert. (2017). *Visual Variables*. 10.1002/9781118786352.wbieg0761. 
- Slocum, T. A., McMaster, R. B., Kessler, F. C. & Howard, H. H., 2009. *Thematic Cartography and Geovisualization*. 3rd Edition ed. Upper Saddle River(NJ): Daniel Kaveney.
- Tyner, J. A., 2010. *Principles of Map Design*. New York: Guilford Press.
- UCGIS. *[CV-08 - Symbolization and the Visual Variables](https://gistbok.ucgis.org/bok-topics/symbolization-and-visual-variables)* (accessed 14 Aug 2019).