<template>
    <div role="tabpanel" class="tab-pane active" id="home">
        <p>用户信息</p>
        <div class="dropdown">
            日期：
        <button id="dLabel" type="button" class="btn btn-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            一期
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dLabel">
            <li><a href="##">一期</a></li>
            <li><a href="##">二期</a></li>
            <li><a href="##">三期</a></li>
        </ul>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr role="row">
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 152px;">Name</th>
                    <th class="sorting_desc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" aria-sort="descending" style="width: 238px;">Position</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 110px;">Office</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 49px;">Age</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 106px;">Start date</th>
                    <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 85px;">Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr role="row" class="odd">
                    <td class="">Donna Snider</td>
                    <td class="sorting_1">Customer Support</td>
                    <td class="">New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                    <td>$112,000</td>
                </tr>
                <tr role="row" class="even">
                    <td class="">Fiona Green</td>
                    <td class="sorting_1">Chief Operating Officer (COO)</td>
                    <td class="">San Francisco</td>
                    <td>48</td>
                    <td>2010/03/11</td>
                    <td>$850,000</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="">Yuri Berry</td>
                    <td class="sorting_1">Chief Marketing Officer (CMO)</td>
                    <td class="">New York</td>
                    <td>40</td>
                    <td>2009/06/25</td>
                    <td>$675,000</td>
                    </tr>
                <tr role="row" class="even">
                    <td class="">Paul Byrd</td>
                    <td class="sorting_1">Chief Financial Officer (CFO)</td>
                    <td class="">New York</td>
                    <td>64</td>
                    <td>2010/06/09</td>
                    <td>$725,000</td>
                </tr>
                <tr role="row" class="odd">
                    <td class="">Angelica Ramos</td>
                    <td class="sorting_1">Chief Executive Officer (CEO)</td>
                    <td class="">London</td>
                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                </tr>
                <tr role="row" class="even">
                    <td class="">Garrett Winters</td>
                    <td class="sorting_1">Accountant</td>
                    <td class="">Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                    </tr>
                <tr role="row" class="odd">
                    <td class="">Airi Satou</td>
                    <td class="sorting_1">Accountant</td>
                    <td class="">Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation" class="navbar-right tabBar">
        <ul class="pagination">
            <li>
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
export default {
    
}
</script>


