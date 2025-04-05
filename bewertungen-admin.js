jQuery( document ).ready( function( $ ) {
    $( '.bewertungen-antwort-link' ).on( 'click', function( e ) {
    e.preventDefault();
    var eintrag_id = $( this ).data( 'eintrag-id' );
    var antwort = prompt( 'Antwort auf Bewertung ' + eintrag_id + ':', '' );
    if ( antwort != null ) {
    $.ajax( {
    url: bewertungen_admin_params.ajax_url,
    type: 'POST',
    data: {
    action: 'bewertungen_antwort',
    eintrag_id: eintrag_id,
    antwort: antwort,
    bewertungen_admin_key: bewertungen_admin_params.bewertungen_admin_nonce
    },
    success: function( response ) {
    alert( 'Die Antwort wurde erfolgreich gespeichert.' );
    }
    } );
    }
    } );
    } ); 