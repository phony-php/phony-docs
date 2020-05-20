---
title: Address
description: Address Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phonyland\Phony('en'));
@endphp

@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'alphabet',
    'attributes'    => ['uppercase_letter', 'lowercase_letter', 'letter'],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'alphabet',
    'attributes'    => [
        [
            'name'          => 'uppercase_letter',
            'description'   => 'Retrieves a random uppercase letter in the given language.'
        ],
        [
            'name'          => 'lowercase_letter',
            'description'   => 'Retrieves a random lowercase letter in the given language.'
        ],
        [
            'name'          => 'letter',
            'description'   => 'Retrieves a random letter in the given language.'
        ],
    ],
])