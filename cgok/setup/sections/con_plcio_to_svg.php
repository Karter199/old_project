<?php
    $current_page_menu = 3; 
    /****************************************************************************************
        вичитуємо з бази даних поточні параметри
    *****************************************************************************************/
    // Кнопка пошук
    if( isset( $_POST['search_obj_name']) )
    {
        $qry = "SELECT ID, SVG_NAME FROM SVG_PARAMETERS WHERE ENABLE = 1 AND SVG_NAME LIKE '" . $_POST['obj_name'] . "%'";
    }
    else
    {
        $qry = "SELECT ID, SVG_NAME FROM SVG_PARAMETERS WHERE ENABLE = 1";
    }

    $svg_objects_query = $connection->query($qry);

    while($svg_objects_array = $svg_objects_query->fetch(PDO::FETCH_ASSOC)){
        $svg_objects_tmp[] = $svg_objects_array;
    }
?>

<iframe name="discribe_object_to_io_frame" frameborder="0" width="85%" height="97%" align="right">  </iframe>

<div class="svg_objects_menu">
    <?php // Пошук по назві об'єкта ?>
    <form class="search_form" method="post" action="main.php?id=<?php echo($current_page_menu); ?>">
        <input type="search" pattern="^[-_a-zA-Z0-9]+$" name="obj_name" class="text_midle" value="<?php echo $_POST['obj_name'];?>">
        <button autofocus type="submit" name="search_obj_name" value="add" > SH </button>
    </form>
    <ul class="svg_objects_list">
        <?php
        foreach($svg_objects_tmp as $svg_objects)
        {
            // ссылка на фрейм target="discribe_product_frame"
            ?>
                <li><a href="sections/con_plcio_to_svg_list.php?obj=<?php echo $svg_objects['ID']; ?>" target="discribe_object_to_io_frame"><?php echo $svg_objects['SVG_NAME']?></a></li>  
            <?php
        }
        ?>
    </ul>

</div>