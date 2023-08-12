from django.http import HttpResponse

# from TestModel.models import Test
# from
from django.db import connection,connections

# databases = connections._connections.__dict__.keys()
# for database in databases:
#     del connections._connections.__dict__[database]
# 数据库操作
def testdb(request):
    # data = prep_view(request)
    # 初始化
    response = ""
    response1 = ""
    cursor = connection.cursor()
    query = "SELECT * FROM public.doorsmove";
    cursor.execute(query)
    amount = cursor.fetchall()
    # res_list = [i[1] for i in amount]
    # all_user = {}
    # for row in cursor.fetchall():
    #     # last = {
    #     #     'lastMergedPR': row[3],
    #     #     'lastOpenPR': row[4],
    #     #     'lastIssue': row[5],
    #     # }
    #     return row
        # all_user[position] = row[0]
        # movedate = row[1]
        # movetime = row[2]
        # user = row[1]
        # repo = row[2]
        # if not user in all_user:
        #     all_user[user] = {}
        # all_user[user][repo] = last
    # print(cursor.execute(query))
    # cursor1=cursor.fetchmany()
    # 通过objects这个模型管理器的all()获得所有数据行，相当于SQL中的SELECT * FROM
    # list = Test.objects.all()
    # for var in list:
    #     response1 += var.name + " "
    # response = response1
    return HttpResponse(
        """<!DOCTYPE html>
            <html>
	        <head>
		<meta charset="utf-8">
			<link href="/static/css/Search_layout.css" rel="stylesheet" />
		<title>Collected Data</title>
	</head>
	<body>
		<header>
		    <nav class="horizontalNavigation">
		       <ul>
				  <li><a href="/Collected_data.html">Collected Data</a></li>
		          <li><a href="/..">Home</a></li>
		       </ul>
		    </nav>
		<table style="width: 900px;border:1px solid black;">
			<tr>
				<th>position</th>
				<th>movedate</th>
				<th>movetime</th>
				<th>Amount of people</th>
			</tr><tr>"""

			"""</tr><tbody id="show" style="text-align:center;"></tbody>
		</table>"""
+str(amount)+'\n'+
            """</body>
</html>"""

 )