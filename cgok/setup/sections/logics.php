<?php
    $current_page_menu = 4; 
    /****************************************************************************************
        вичитуємо з бази даних поточні параметри
    *****************************************************************************************/
    // Кнопка пошук
    if( isset( $_POST['logic_search_obj_name']) )
    {
        $qry = "SELECT ID, SVG_NAME FROM SVG_PARAMETERS WHERE ENABLE = 1 AND SVG_NAME LIKE '" . $_POST['logic_obj_name'] . "%'";
    }
    else
    {
        $qry = "SELECT ID, SVG_NAME FROM SVG_PARAMETERS WHERE ENABLE = 1";
    }

    $logic_svg_objects_query = $connection->query($qry);

    while($Logic_svg_objects_array = $logic_svg_objects_query->fetch(PDO::FETCH_ASSOC)){
        $logic_svg_objects_tmp[] = $Logic_svg_objects_array;
    }
?>

<iframe name="discribe_logics_frame" frameborder="0" width="85%" height="97%" align="right">  </iframe>

<div class="svg_objects_menu">
    <?php // Пошук по назві об'єкта ?>
    <form class="search_form" method="post" action="main.php?id=<?php echo($current_page_menu); ?>">
        <input type="search" pattern="^[-_a-zA-Z0-9]+$" name="logic_obj_name" class="text_midle" value="">
        <button autofocus type="submit" name="logic_search_obj_name" value="add" > SH </button>
    </form>
    <ul class="svg_objects_list">
        <?php
        foreach($logic_svg_objects_tmp as $logic_svg_objects)
        {
            // ссылка на фрейм target="discribe_product_frame"
            ?>
                <li><a href="sections/logics_list.php?obj=<?php echo $logic_svg_objects['ID']; ?>" target="discribe_logics_frame"><?php echo $logic_svg_objects['SVG_NAME']?></a></li>  
            <?php
        }
        ?>
    </ul>

</div>