---
title: Artist
description: Artist Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phonyland\Phony('en'));
@endphp

@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'artist',
    'attributes'    => ['name'],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'artist',
    'attributes'    => [
        [
            'name'          => 'name',
            'description'   => 'Retrieves a random name of an artist.',
        ],
    ],
])