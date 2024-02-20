<template>
  <v-navigation-drawer
    v-bind:value="value"
    v-on:input="setDrawer"
    app
    clipped
    :mini-variant="true"
  >
    <v-list dense>
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature01"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>01</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature01") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature01") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature02"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>02</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature02") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature02") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature03"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>03</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature03") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature03") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature04a"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>04'</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature04A") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature04A") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature04b"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>04"</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature04B") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature04B") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature05"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>05</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature05") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature05") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature06"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>06</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature06") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature06") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature07"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>07</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature07") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature07") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature08a"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>08'</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature08A") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature08A") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature08b"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>08"</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature08B") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature08B") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature09a"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>09'</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature09A") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature09A") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature09b"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>09"</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature09B") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature09B") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature10"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>10</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature10") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature10") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature11"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>11</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature11") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature11") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature12"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>12</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature12") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature12") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature13"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>13</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature13") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature13") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature14"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>14</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature14") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature14") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature15"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>15</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature15") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature15") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature16"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>16</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature16") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature16") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature17"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>17</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature17") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature17") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature18"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>18</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature18") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature18") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature19"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>19</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature19") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature19") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature20"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>20</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature20") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature20") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature21"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>21</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature21") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature21") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature22"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>22</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature22") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature22") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature23"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>23</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature23") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature23") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature24"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>24</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature24") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature24") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature25"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>25</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature25") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature25") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature26"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>26</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature26") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature26") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature27"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>27</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature27") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature27") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature28"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>28</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature28") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature28") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature29"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>29</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature29") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature29") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature30"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>30</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature30") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature30") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature31"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>31</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature31") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature31") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature32"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>32</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature32") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature32") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature33"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>33</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature33") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature33") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature34"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>34</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature34") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature34") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature35"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>35</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature35") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature35") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature39"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>39</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature39") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature39") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature40"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>40</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature40") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature40") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature41"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>41</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature41") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature41") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature43"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>43</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature43") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature43") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature44"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>44</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature44") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature44") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature45"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>45</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature45") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature45") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature46"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>46</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature46") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature46") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature47"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>47</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature47") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature47") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature48"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>48</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature48") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature48") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature49"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>49</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature49") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature49") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature50"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>50</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature50") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature50") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature51"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>51</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature51") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature51") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature52"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>52</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature52") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature52") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature53"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>53</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature53") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature53") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature54"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>54</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature54") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature54") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature55"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>55</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature55") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature55") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature56"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>56</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature56") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature56") }}</span>
      </v-tooltip>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-list-item
            to="/feature57"
            active-class="primary--text"
            ripple
            v-bind="attrs"
            v-on="on"
          >
            <v-list-item-action>57</v-list-item-action>
            <v-list-item-title>{{ lookup("Feature57") }}</v-list-item-title>
          </v-list-item>
        </template>
        <span>{{ lookup("Feature57") }}</span>
      </v-tooltip>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-list-item
              to="/information"
              active-class="primary--text"
              ripple
              v-bind="attrs"
              v-on="on"
            >
              <v-list-item-action>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-action>
              <v-list-item-title>🛈</v-list-item-title>
            </v-list-item>
          </template>
          <span>🛈</span>
        </v-tooltip>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ApplicationMenu",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    setDrawer(value: boolean) {
      this.$emit("input", value);
    },

    lookup(name: string) {
      if (name === null || !name.startsWith("Feature")) {
        return name;
      }
      return this.$vuetify.lang.t(`$vuetify.${name}`);
    },
  },
});
</script>
