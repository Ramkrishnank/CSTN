/*! tools 2018-02-09 */
function EventTracking(){}EventTracking.BrowserEvents="Browser Events",EventTracking.LandingPageEvents="Landing Page Events",EventTracking.MapSummaryPanel="Map Panel Summary",EventTracking.MapWhatPanel="Map What Panel",EventTracking.MapWherePanel="Map Where Panel",EventTracking.MapWhenPanel="Map When Panel",EventTracking.MapReport="Report",EventTracking.MapChart="Chart",EventTracking.MapDetailsPanel="Details Panel",EventTracking.MapMetadataPanel="Metadata Panel",EventTracking.MapInteractions="Map Interactions",EventTracking.MapAgencyMetadataLink="Agency Metadata Link",EventTracking.HamburgerHelper="Hamburger Helper",EventTracking.AlertPage="Alert Page",EventTracking.PictometryPage="Pictometry Page",EventTracking.BrowserZoomLevelChanged=function(a){ga("send","event",EventTracking.BrowserEvents,"Browser zoom level changed",a)},EventTracking.LandingAddressSearchEvent=function(a){ga("send","event",EventTracking.LandingPageEvents,"Near a location",a)},EventTracking.LandingAgencySearchEvent=function(a){ga("send","event",EventTracking.LandingPageEvents,"Near an agency",a)},EventTracking.LandingMapLink=function(){ga("send","event",EventTracking.LandingPageEvents,"Map Link")},EventTracking.MapSummaryOpenPanel=function(){ga("send","event",EventTracking.MapSummaryPanel,"Open Panel")},EventTracking.MapSummaryRestoreDefaults=function(){ga("send","event",EventTracking.MapSummaryPanel,"Restore Defaults")},EventTracking.MapSummaryShareMap=function(){ga("send","event",EventTracking.MapSummaryPanel,"Share this map")},EventTracking.MapWhatOpenPanel=function(){ga("send","event",EventTracking.MapWhatPanel,"Open Panel")},EventTracking.MapWhatIncidentTypesChanged=function(a){ga("send","event",EventTracking.MapWhatPanel,"Incident Types Changed",a)},EventTracking.MapWhereOpenPanel=function(){ga("send","event",EventTracking.MapWherePanel,"Open Panel")},EventTracking.MapWhereSearchApplied=function(){ga("send","event",EventTracking.MapWherePanel,"Search filter applied")},EventTracking.MapWhenOpenPanel=function(){ga("send","event",EventTracking.MapWhenPanel,"Open Panel")},EventTracking.MapWhenShortcuts=function(){ga("send","event",EventTracking.MapWhenPanel,"Shortcuts")},EventTracking.MapWhenCustomCalendar=function(){ga("send","event",EventTracking.MapWherePanel,"Custom Calendar")},EventTracking.MapOpenReport=function(){ga("send","event",EventTracking.MapReport,"Open Report")},EventTracking.MapReportMapItClicked=function(){ga("send","event",EventTracking.MapReport,"Map It button")},EventTracking.MapOpenChart=function(){ga("send","event",EventTracking.MapReport,"Open Chart")},EventTracking.MapDetailsOpenPanel=function(){ga("send","event",EventTracking.MapDetailsPanel,"Open Panel")},EventTracking.MapDetailsHowCloseGo=function(){ga("send","event",EventTracking.MapDetailsPanel,"How close Go button")},EventTracking.MapDetailsAgencyMetadataClicked=function(){ga("send","event",EventTracking.MapDetailsPanel,"Agency metadata clicked")},EventTracking.MapDetailsZoomToClicked=function(){ga("send","event",EventTracking.MapDetailsPanel,"Zoom to button")},EventTracking.MapDetailsShareClicked=function(){ga("send","event",EventTracking.MapDetailsPanel,"Share button")},EventTracking.MapMetadataOpenPanel=function(a){ga("send","event",EventTracking.MapMetadataPanel,"Open metadata panel",a)},EventTracking.MapMetadataShowOnlyAgencyChecked=function(){ga("send","event",EventTracking.MapMetadataPanel,"Show only agency records")},EventTracking.MapMetadataAlternateAgencySelected=function(){ga("send","event",EventTracking.MapMetadataPanel,"Alternate agency selected")},EventTracking.MapMetadataZoomToAgency=function(){ga("send","event",EventTracking.MapMetadataPanel,"Zoom to agency")},EventTracking.MapInteractionsBasemapSelected=function(a){ga("send","event",EventTracking.MapInteractions,"Basemap selected",a)},EventTracking.MapInteractionsOpenMetadata=function(){ga("send","event",EventTracking.MapInteractions,"Agency metadata opened")},EventTracking.MapInteractionsZoomIn=function(){ga("send","event",EventTracking.MapInteractions,"Zoom In")},EventTracking.MapInteractionsZoomOut=function(){ga("send","event",EventTracking.MapInteractions,"Zoom Out")},EventTracking.MapZoomLevelChanged=function(a){ga("send","event",EventTracking.MapInteractions,"Zoom level",a)},EventTracking.MapInteractionsMyLocation=function(){ga("send","event",EventTracking.MapInteractions,"My Current Location")},EventTracking.MapInteractionsOpenDistanceTool=function(){ga("send","event",EventTracking.MapInteractions,"Open distance tool")},EventTracking.MapInteractionsOpenDetailsPanel=function(){ga("send","event",EventTracking.MapInteractions,"Open Details Panel")},EventTracking.MapAgencyMetadataLinkClicked=function(){ga("send","event",EventTracking.MapAgencyMetadataLink,"Open Agency Metadata Link clicked")},EventTracking.MapHamburgerHelperSelected=function(){ga("send","event",EventTracking.HamburgerHelper,"Open off canvas menu")},EventTracking.AlertPageOpened=function(){ga("send","event",EventTracking.AlertPage,"Page opened")},EventTracking.AlertPageSave=function(a){ga("send","event",EventTracking.AlertPage,"Save alert",a)},EventTracking.PictometryPageOpened=function(){ga("send","event",EventTracking.PictometryPage,"Page opened")};