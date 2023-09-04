var member_count = [0,0,0];
var member_label = ["Alumni", "PhD", "Master"];
var table_list = [];
table_list.push(document.getElementById("group_table_Alumni"));
table_list.push(document.getElementById("group_table_PhD"));
table_list.push(document.getElementById("group_table_Master"));

var tr_list = [];
tr_list.push(document.createElement("tr"));
tr_list.push(document.createElement("tr"));
tr_list.push(document.createElement("tr"));

$.ajax({
    url: "./group_members.csv",
    success: function (result) {
        console.log("success!");
        console.log(table_list);
        var memberList = result.split("\n");
        if(memberList[memberList.length - 1] == ""){
            memberList.pop();
        }
        memberList.sort(function(x, y){
            var member_x = x.split(",");
            var name_x = member_x[1].split(" ");
            var time_x = parseInt(member_x[4]);

            var member_y = y.split(",");
            var name_y = member_y[1].split(" ");
            var time_y = parseInt(member_y[4]);

            if(time_x == time_y){
                if(name_x[1] > name_y[1])
                    return 1;
                else
                    return -1;
            }
            else {
                return time_x - time_y;
            }
        });

        console.log(memberList);
        for(var i=1; i < memberList.length; i++){
            if(memberList[i].indexOf(",") == -1){
                continue;
            }
            //0:type
            //1:Name
            //2:Github Url
            //3:Research Direction
            //4:Graduate Time
            var cur_member = memberList[i].split(",");
            var index = 0;
            switch (cur_member[0].toLocaleLowerCase()){
                case "phd": index = 1; break;
                case "master": index = 2; break;
            }

            var member_info = document.createElement("td");
            member_info.className = "member_info";

            var member_href = document.createElement("a");
            if(cur_member[2] != "/"){
                member_href.setAttribute('href', cur_member[2]);
                member_href.setAttribute('target', "_blank");
                //member_info.id = "link_card";
            }

            var member_img_div = document.createElement("div");
            member_img_div.className = "member_img_div";
            //var cur_name = cur_member[1].toLocaleLowerCase().replace(" ","");
            var cur_name = cur_member[1];
            var cur_src = "./photos/" + cur_name + ".jpg";
            var member_img_div_info =
                "<img class=\"card_img\" alt=\"" + cur_name + "\" src=\"" + cur_src +"\">";
            console.log(member_img_div_info);
            member_img_div.innerHTML = member_img_div_info;

            member_href.appendChild(member_img_div);

            var member_name = document.createElement("div");
            member_name.className = "member_name";
            member_name.append(cur_member[1]);
            member_href.appendChild(member_name);



            var member_research_direction = document.createElement("div");
            member_research_direction.className = "member_research_direction";
            member_research_direction.append(cur_member[3]);

            member_research_direction.classList.add(member_label[index]+"_tr_"+
                (Math.floor(member_count[index] / 4)));
            member_href.appendChild(member_research_direction);

            
            var member_graduate_time = document.createElement("div");
            member_name.className = "member_graduate_time";
            member_name.append(cur_member[4]);
            member_href.appendChild(member_graduate_time);

            
            member_info.appendChild(member_href);
            //console.log(tr_list,index);
            tr_list[index].appendChild(member_info);

            member_count[index]++;
            if(member_count[index] % 4 == 0){
                tr_list[index].style.verticalAlign = "top";
                tr_list[index].className = "member_tr";
                table_list[index].appendChild(tr_list[index]);
                tr_list[index] = document.createElement("tr");
            }
        }

        for(var num=0;num<3;num++){
            console.log(member_count[num]);
            if(member_count[num] == 0){
                var cur_table = document.getElementById(member_label[num]);
                console.log(member_label[num]);
                cur_table.style.display = "none";
            }

            tr_list[num].style.verticalAlign = "top";
            tr_list[num].className = "member_tr";
            table_list[num].appendChild(tr_list[num]);
        }
    }
});
