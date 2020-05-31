### [# {{ $attribute }}](#{{ Illuminate\Support\Str::slug($attribute)}}){ #{{ Illuminate\Support\Str::slug($attribute)}} }

{{ $description }}

@include('_partials._attribute_usage', ['group' => $group, 'attribute' => $attribute ])
@include('_partials._attribute_sample_outputs', ['group' => $group, 'attribute' => $attribute])