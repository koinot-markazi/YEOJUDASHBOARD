function getMap(){
  console.log("getMap is called!");

  var simplemaps_countrymap_mapdata={
    main_settings: {
      //General settings
      width: "500", //or 'responsive'
      background_color: "#FFFFFF",
      background_transparent: "yes",
      border_color: "#ffffff",
      pop_ups: "detect",
      
      //State defaults
      state_description: "",
      state_color: "#88A4BC",
      state_hover_color: "#3B729F",
      state_url: "",
      border_size: 1.5,
      all_states_inactive: "no",
      all_states_zoomable: "no",
      
      //Location defaults
      location_description: "",
      location_url: "",
      location_color: "#3B729F",
      location_opacity: 0.8,
      location_hover_opacity: 1,
      location_size: 25,
      location_type: "square",
      location_image_source: "frog.png",
      location_border_color: "#FFFFFF",
      location_border: 2,
      location_hover_border: 2.5,
      all_locations_inactive: "no",
      all_locations_hidden: "no",
      
      //Label defaults
      label_color: "#d5ddec",
      label_hover_color: "#d5ddec",
      label_size: 22,
      label_font: "Arial",
      hide_labels: "no",
      hide_eastern_labels: "no",
    
      //Zoom settings
      zoom: "yes",
      manual_zoom: "yes",
      back_image: "no",
      initial_back: "no",
      initial_zoom: "-1",
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "yes",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
      //Popup settings
      popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
      //Advanced settings
      div: "map_c",
      auto_load: "yes",
      url_new_tab: "no",
      images_directory: "default",
      fade_time: 0.1,
      link_text: "View Website"
    },
    state_specific: {
      UZB354: {
        name: "Bukhoro",
        description: "23 males / 42 females",
        color: "default",
        hover_color: "default",
        url: "default"
      },
      UZB355: {
        name: "Khorezm",
        description: "23 males / 42 females",
      },
      UZB356: {
        name: "Karakalpakstan",
        description: "23 males / 42 females",
      },
      UZB357: {
        name: "Navoi",
        description: "23 males / 42 females"
      },
      UZB358: {
        name: "Samarkand",
        description: "23 males / 42 females"
      },
      UZB361: {
        name: "Kashkadarya",
        description: "23 males / 42 females"
      },
      UZB362: {
        name: "Surkhandarya",
        description: "23 males / 42 females"
      },
      UZB363: {
        name: "Andijon",
        description: "23 males / 42 females"
      },
      UZB364: {
        name: "Ferghana",
        description: "23 males / 42 females"
      },
      UZB365: {
        name: "Namangan",
        description: "23 males / 42 females"
      },
      UZB370: {
        name: "Jizzakh",
        description: "23 males / 42 females"
      },
      UZB371: {
        name: "Sirdaryo",
        description: "23 males / 42 females"
      },
      UZB372: {
        name: "Tashkent",
        description: "23 males / 42 females"
      },
      UZB4828: {
        name: "Tashkent",
        description: "23 males / 42 females"
      }
    },
    locations: {
      "0": {
        lat: "41.316667",
        lng: "69.25",
        name: "Tashkent"
      }
    }
  };

  console.log("getMap is called at the end!");
}
